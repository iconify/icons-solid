import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q471_irwr.css';
import '../../css/n/nhv4ufbsv.css';
import '../../css/a/a762wedry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q471_irwr"/><path class="nhv4ufbsv"/><path class="a762wedry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-sketch"} {...others} />);
}

export default Component;
