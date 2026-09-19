import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/agw-23bom.css';
import '../../css/f/fe7872tje.css';
import '../../css/r/rr58v-owm.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(3)" class="n1lsf0bnc"><path class="agw-23bom"/><ellipse class="fe7872tje"/><path class="rr58v-owm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:globe"} {...others} />);
}

export default Component;
