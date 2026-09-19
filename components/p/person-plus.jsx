import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fv6k7p8vn.css';
import '../../css/t/tlzj7xbfp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fv6k7p8vn"/><path class="tlzj7xbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:person-plus"} {...others} />);
}

export default Component;
