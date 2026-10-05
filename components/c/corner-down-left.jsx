import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w3q64n2xd.css';
import '../../css/l/llygx5dpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="w3q64n2xd"/><path class="llygx5dpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:corner-down-left"} {...others} />);
}

export default Component;
