import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xitxxt65b.css';
import '../../css/z/zm28ynbxs.css';
import '../../css/e/en7u5hbbv.css';
import '../../css/s/stw3zkk7t.css';
import '../../css/b/bpacb-3vt.css';
import '../../css/x/xhxurdbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xitxxt65b"/><path class="zm28ynbxs"/><path class="en7u5hbbv"/><path class="stw3zkk7t"/><path class="bpacb-3vt"/><path class="xhxurdbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:type-size"} {...others} />);
}

export default Component;
