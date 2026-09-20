import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u3qaw2ogo.css';
import '../../css/k/k_0h03e_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u3qaw2ogo"/><path class="k_0h03e_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:search-history-browser"} {...others} />);
}

export default Component;
