import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwztv3bbz.css';
import '../../css/p/plfffuboi.css';
import '../../css/d/dpg9ebcnb.css';
import '../../css/t/tnnu4-3_u.css';
import '../../css/d/djdfc5bcg.css';
import '../../css/t/tbs1_0bvp.css';
import '../../css/u/unmznsbqu.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="iwztv3bbz"/><path clip-rule="evenodd" class="plfffuboi"/><path class="dpg9ebcnb"/><path clip-rule="evenodd" class="tnnu4-3_u"/><path clip-rule="evenodd" class="djdfc5bcg"/><path class="tbs1_0bvp"/><path class="unmznsbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:jar-with-red-content"} {...others} />);
}

export default Component;
