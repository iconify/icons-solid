import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zeznnhb5f.css';
import '../../css/p/p5eh8xbiq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="zeznnhb5f"/><path class="p5eh8xbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-arrow-up"} {...others} />);
}

export default Component;
