import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrevvexwd.css';
import '../../css/y/y8831uv_e.css';
import '../../css/b/bpvapv1zv.css';
import '../../css/y/yqsyl-tgg.css';
import '../../css/x/xzmfmwbsb.css';
import '../../css/a/a479g8b8h.css';
import '../../css/z/z8b-f8psp.css';
import '../../css/q/qwnfcoycf.css';
import '../../css/n/nxshvh2hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hrevvexwd"/><path class="y8831uv_e"/><path class="bpvapv1zv"/><path class="yqsyl-tgg"/><path class="xzmfmwbsb"/><path class="a479g8b8h"/><path class="z8b-f8psp"/><path class="qwnfcoycf"/><path class="nxshvh2hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-bookmark"} {...others} />);
}

export default Component;
