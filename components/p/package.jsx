import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qyv9vzb_f.css';
import '../../css/m/mag11obkh.css';
import '../../css/d/dkae5r7cx.css';
import '../../css/r/rtti3aceo.css';
import '../../css/m/my68hcchx.css';
import '../../css/d/dn21tvbel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qyv9vzb_f wm-shadow"/><path class="mag11obkh"/><path class="dkae5r7cx"/><path class="rtti3aceo"/><path class="my68hcchx"/><path class="dn21tvbel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:package"} {...others} />);
}

export default Component;
