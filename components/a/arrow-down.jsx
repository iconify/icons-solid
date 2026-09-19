import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p59xlhsbb.css';

const viewBox = {"width":1600,"height":1472};
const content = `<g transform="translate(0 1472) scale(1 -1)"><path class="p59xlhsbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:arrow-down"} {...others} />);
}

export default Component;
