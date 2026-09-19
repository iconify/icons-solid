import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q70s55boh.css';
import '../../css/p/pn53utzvz.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="q70s55boh"/><path class="pn53utzvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:stamps"} {...others} />);
}

export default Component;
