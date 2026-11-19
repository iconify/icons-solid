import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddulb1r7o.css';
import '../../css/m/mmr0x_b2r.css';
import '../../css/v/v2abq3qhv.css';
import '../../css/y/yj2g65bky.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ddulb1r7o"/><path class="mmr0x_b2r"/><circle class="v2abq3qhv"/><path class="yj2g65bky"/><path class="x9g6iubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-settings"} {...others} />);
}

export default Component;
