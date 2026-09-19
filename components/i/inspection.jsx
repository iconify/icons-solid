import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/srhbvgbaj.css';
import '../../css/t/tgf1jxbcb.css';
import '../../css/h/hu_nuxbxh.css';
import '../../css/a/a9t4ey_1q.css';
import '../../css/p/p0km8_bsw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="srhbvgbaj"/><path class="tgf1jxbcb"/><path class="hu_nuxbxh"/><circle class="a9t4ey_1q"/><path class="p0km8_bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:inspection"} {...others} />);
}

export default Component;
