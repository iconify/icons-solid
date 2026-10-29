import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vrf_umb-v.css';
import '../../css/j/jpoivdq2g.css';
import '../../css/d/dz-1iivjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vrf_umb-v"/><path class="jpoivdq2g"/><path class="dz-1iivjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-sketch"} {...others} />);
}

export default Component;
