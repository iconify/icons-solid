import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/srjjn2xrl.css';
import '../../css/d/dl06w5ain.css';
import '../../css/h/h23sgfbdf.css';
import '../../css/m/m3bmrg83i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="srjjn2xrl"/><path class="dl06w5ain"/><path class="h23sgfbdf"/><path class="m3bmrg83i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:peacock-feather"} {...others} />);
}

export default Component;
