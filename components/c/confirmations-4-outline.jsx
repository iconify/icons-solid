import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rdjp0q8rs.css';
import '../../css/k/k_zqo0b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="rdjp0q8rs"/><path class="k_zqo0b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-4-outline"} {...others} />);
}

export default Component;
