import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w0v5p4b8e.css';
import '../../css/v/vd7gt8b1z.css';
import '../../css/u/unie4db7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="w0v5p4b8e"/><path class="vd7gt8b1z"/><path class="unie4db7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:mars"} {...others} />);
}

export default Component;
