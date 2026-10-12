import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pirchl2uz.css';
import '../../css/y/yolid685o.css';
import '../../css/t/t5wzgeb_u.css';
import '../../css/c/cvej9yzdi.css';
import '../../css/v/v8_t7werj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pirchl2uz"/><path class="yolid685o"/><path class="t5wzgeb_u"/><path class="cvej9yzdi"/><path class="v8_t7werj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ball-basketball"} {...others} />);
}

export default Component;
