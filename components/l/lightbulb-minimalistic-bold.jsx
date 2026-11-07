import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucgsi_b-h.css';
import '../../css/l/l35tfkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ucgsi_b-h"/><path class="l35tfkbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-minimalistic-bold"} {...others} />);
}

export default Component;
