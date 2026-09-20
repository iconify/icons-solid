import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xip25pbfv.css';
import '../../css/t/t5nlyebtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="xip25pbfv"/><path class="t5nlyebtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:external"} {...others} />);
}

export default Component;
