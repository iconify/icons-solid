import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7mn_xgnv.css';
import '../../css/o/oojk4pbmj.css';
import '../../css/y/ytntd_8jh.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="h7mn_xgnv"><path class="oojk4pbmj"/><path class="ytntd_8jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-outer-outline"} {...others} />);
}

export default Component;
