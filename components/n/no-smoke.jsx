import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/im2n03brp.css';
import '../../css/n/n0jtc4b-c.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="im2n03brp"/><path class="n0jtc4b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:no-smoke"} {...others} />);
}

export default Component;
