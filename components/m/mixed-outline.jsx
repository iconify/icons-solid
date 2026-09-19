import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q5cj01boe.css';
import '../../css/b/bqj_4ebkn.css';
import '../../css/y/y_x2e9jem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="q5cj01boe"/><path class="bqj_4ebkn"/><path class="y_x2e9jem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mixed-outline"} {...others} />);
}

export default Component;
