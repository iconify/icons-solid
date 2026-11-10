import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xpangfbwq.css';
import '../../css/q/qtyeivbzw.css';
import '../../css/f/fptq2jb3r.css';
import '../../css/a/azk9q0baw.css';
import '../../css/s/s9_w-ib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xpangfbwq"/><path class="qtyeivbzw"/><path class="fptq2jb3r"/><path class="azk9q0baw"/><path class="s9_w-ib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:drink"} {...others} />);
}

export default Component;
