import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2k0rfjkc.css';
import '../../css/v/v4y9w4i-b.css';
import '../../css/x/x-89fq5bh.css';
import '../../css/j/j1yi5dnnd.css';
import '../../css/m/mah05kb2x.css';
import '../../css/u/uie_7acsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a2k0rfjkc"/><path class="v4y9w4i-b"/><path class="x-89fq5bh"/><path class="j1yi5dnnd"/><path class="mah05kb2x"/><path class="uie_7acsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:serial-port"} {...others} />);
}

export default Component;
