import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkiwvd2vg.css';
import '../../css/z/z99nws9nc.css';
import '../../css/h/hikk7hbhy.css';
import '../../css/y/yw_ha830o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vkiwvd2vg"/><path clip-rule="evenodd" class="z99nws9nc"/><path class="hikk7hbhy"/><path clip-rule="evenodd" class="yw_ha830o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smile-outline"} {...others} />);
}

export default Component;
