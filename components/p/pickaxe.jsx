import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wk9zspb8b.css';
import '../../css/h/hmttw_nrc.css';
import '../../css/i/iqrpfub-f.css';
import '../../css/v/vtudi687p.css';
import '../../css/a/awblbp88e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wk9zspb8b wm-shadow"/><path class="hmttw_nrc wm-shadow"/><path class="iqrpfub-f"/><path class="vtudi687p"/><path class="awblbp88e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pickaxe"} {...others} />);
}

export default Component;
