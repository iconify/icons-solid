import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oy6zoybsj.css';
import '../../css/w/w2adgjlap.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="oy6zoybsj"/><path class="w2adgjlap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-add"} {...others} />);
}

export default Component;
