import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o_vht2jmm.css';
import '../../css/b/bxecxbb3f.css';
import '../../css/m/mcsf3nhcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o_vht2jmm"/><path class="bxecxbb3f"/><path class="mcsf3nhcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-big-up-sketch"} {...others} />);
}

export default Component;
