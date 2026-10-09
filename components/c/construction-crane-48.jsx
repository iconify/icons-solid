import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx8d4-q2n.css';
import '../../css/f/fjtwhsb_o.css';
import '../../css/p/pxpj-8byp.css';
import '../../css/u/u8yg584ct.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fx8d4-q2n"/><path class="fjtwhsb_o"/><path class="pxpj-8byp"/><path class="u8yg584ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:construction-crane-48"} {...others} />);
}

export default Component;
