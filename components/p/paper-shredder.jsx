import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/prax9_bmi.css';
import '../../css/g/g8i_fbple.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="prax9_bmi"/><path class="g8i_fbple"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:paper-shredder"} {...others} />);
}

export default Component;
