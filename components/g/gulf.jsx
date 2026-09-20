import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1u_yzaak.css';
import '../../css/d/dagp_7b_p.css';
import '../../css/v/vl4thlbxt.css';
import '../../css/v/vb_zqjsyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1u_yzaak"/><path class="dagp_7b_p"/><path class="vl4thlbxt"/><path class="vb_zqjsyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gulf"} {...others} />);
}

export default Component;
