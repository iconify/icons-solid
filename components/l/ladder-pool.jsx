import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mjyefkbat.css';
import '../../css/m/m9243w-5j.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="mjyefkbat"/><path class="m9243w-5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ladder-pool"} {...others} />);
}

export default Component;
