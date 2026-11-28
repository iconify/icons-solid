import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sou8e1b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sou8e1b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:suitcase-x"} {...others} />);
}

export default Component;
