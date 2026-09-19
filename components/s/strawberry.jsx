import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eknr0yb3q.css';
import '../../css/m/mthhcmfvq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="eknr0yb3q"/><path class="mthhcmfvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:strawberry"} {...others} />);
}

export default Component;
