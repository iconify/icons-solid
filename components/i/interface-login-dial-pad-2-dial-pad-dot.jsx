import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgw8jg94a.css';
import '../../css/r/rvurs1tbw.css';
import '../../css/p/pu7xdrmve.css';
import '../../css/o/o5grrub_r.css';
import '../../css/z/zviecfb4g.css';
import '../../css/b/bmzsoywgp.css';
import '../../css/h/hhov-gbog.css';
import '../../css/l/l08npqgdq.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="fgw8jg94a"/><circle class="rvurs1tbw"/><circle class="pu7xdrmve"/><circle class="o5grrub_r"/><circle class="zviecfb4g"/><circle class="bmzsoywgp"/><circle class="hhov-gbog"/><circle class="l08npqgdq"/><circle class="dcgw77bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-login-dial-pad-2-dial-pad-dot"} {...others} />);
}

export default Component;
