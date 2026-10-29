import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7a52cbkf.css';
import '../../css/x/xm1w33vqu.css';
import '../../css/j/j1ek91b-b.css';
import '../../css/y/y6s2i_bax.css';
import '../../css/b/bodjtmbnf.css';
import '../../css/y/y42mrrb6w.css';
import '../../css/i/i0mbzbb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v7a52cbkf wm-a"/><path class="wm-a xm1w33vqu"/><path class="j1ek91b-b wm-a"/><path class="wm-k y6s2i_bax"/><path class="bodjtmbnf wm-k"/><path class="wm-k y42mrrb6w"/><path class="i0mbzbb3k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:reply-all"} {...others} />);
}

export default Component;
