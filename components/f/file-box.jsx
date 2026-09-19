import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pjyhppbyk.css';
import '../../css/z/zejy9ubbf.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="pjyhppbyk"/><path class="zejy9ubbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:file-box"} {...others} />);
}

export default Component;
