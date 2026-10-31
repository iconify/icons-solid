import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z5-q_fb8k.css';
import '../../css/o/o3_bhqdhw.css';
import '../../css/x/xh4551b7j.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/p/p7lia970e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="z5-q_fb8k"/><path class="o3_bhqdhw wm-shine"/><path class="wm-k xh4551b7j"/><path class="qr4ochb5c wm-s"/><path class="p7lia970e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shield-off"} {...others} />);
}

export default Component;
