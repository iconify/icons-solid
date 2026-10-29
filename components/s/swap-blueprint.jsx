import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t_ybcacpd.css';
import '../../css/w/w2j8fqp7t.css';
import '../../css/i/iepk79cqx.css';
import '../../css/e/elgqt-pai.css';
import '../../css/a/asuzht4uf.css';
import '../../css/n/nqq59vbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t_ybcacpd wm-deco"/><path class="w2j8fqp7t wm-deco"/><path class="iepk79cqx wm-k"/><path class="elgqt-pai wm-a"/><path class="asuzht4uf wm-k"/><path class="nqq59vbxv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swap-blueprint"} {...others} />);
}

export default Component;
