import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rch2s0bea.css';
import '../../css/t/tasdyxbrj.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rch2s0bea"/><path class="tasdyxbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:back-pack"} {...others} />);
}

export default Component;
