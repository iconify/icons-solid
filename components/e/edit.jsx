import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mk263c2vx.css';
import '../../css/y/yetgw9b4w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="mk263c2vx"/><path class="yetgw9b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:edit"} {...others} />);
}

export default Component;
