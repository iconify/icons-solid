import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/est0i7brh.css';
import '../../css/y/y2ul4pbgf.css';
import '../../css/k/kjuu65uuf.css';
import '../../css/m/m40yfn3ql.css';
import '../../css/l/lgk-66boe.css';
import '../../css/u/uv-rn7boq.css';
import '../../css/f/fyh55nbcl.css';
import '../../css/y/ybpcw4bhb.css';
import '../../css/s/so755vrko.css';
import '../../css/z/zdaqwmbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="est0i7brh wm-k"/><path class="wm-k y2ul4pbgf"/><path class="kjuu65uuf wm-k"/><path class="m40yfn3ql wm-k"/><path class="lgk-66boe wm-k"/><path class="uv-rn7boq wm-k"/><path class="fyh55nbcl wm-a"/><path class="wm-a ybpcw4bhb"/><path class="so755vrko wm-a"/><path class="wm-shine zdaqwmbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:hand-heart"} {...others} />);
}

export default Component;
