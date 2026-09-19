import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z64f1kbqd.css';
import '../../css/d/dysgjbboo.css';
import '../../css/c/c_frfebem.css';
import '../../css/v/vvkquubga.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="z64f1kbqd"/><path class="dysgjbboo"/><path class="c_frfebem"/><ellipse class="vvkquubga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:tank"} {...others} />);
}

export default Component;
