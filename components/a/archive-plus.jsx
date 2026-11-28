import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9lf4bddw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9lf4bddw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:archive-plus"} {...others} />);
}

export default Component;
