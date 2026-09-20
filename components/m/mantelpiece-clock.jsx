import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5buy6bfe.css';
import '../../css/n/nnr8tq4ux.css';
import '../../css/m/mbu6vdyuz.css';
import '../../css/i/ib50hwjui.css';
import '../../css/g/gbtlmtx9x.css';
import '../../css/m/made90_fb.css';
import '../../css/w/wbnthxbsb.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/t4i3cp1pb.css';
import '../../css/n/noc7jh84k.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="d5buy6bfe"/><path class="nnr8tq4ux"/><path class="mbu6vdyuz"/><path class="ib50hwjui"/><path class="gbtlmtx9x"/><path class="made90_fb"/><path class="wbnthxbsb"/><g class="rpvb-o6bq"><circle class="t4i3cp1pb"/><circle class="t4i3cp1pb"/><path class="noc7jh84k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mantelpiece-clock"} {...others} />);
}

export default Component;
