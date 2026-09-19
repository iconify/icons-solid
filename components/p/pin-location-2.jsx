import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v3ssb58ox.css';
import '../../css/s/shje9hhpu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="v3ssb58ox"/><path class="shje9hhpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pin-location-2"} {...others} />);
}

export default Component;
