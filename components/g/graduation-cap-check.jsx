import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooa4c13xh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ooa4c13xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:graduation-cap-check"} {...others} />);
}

export default Component;
