import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/d/dzw6b4ble.css';
import '../../css/h/h7ek_kb8m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="dzw6b4ble"/><path class="h7ek_kb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:antlr"} {...others} />);
}

export default Component;
