import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/p/pf38omm_v.css';
import '../../css/n/nr76ggb-a.css';
import '../../css/j/jw5sb_bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="pf38omm_v"/><path class="nr76ggb-a"/><path class="jw5sb_bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:squarespace-logo"} {...others} />);
}

export default Component;
