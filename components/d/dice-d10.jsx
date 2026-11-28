import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tuv8w3tag.css';
import '../../css/q/qtkbu5ffn.css';
import '../../css/o/oehi90b4z.css';
import '../../css/k/k484-6jho.css';
import '../../css/n/n9mayac_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tuv8w3tag"/><path class="qtkbu5ffn"/><path class="oehi90b4z"/><path class="k484-6jho"/><path class="n9mayac_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dice-d10"} {...others} />);
}

export default Component;
