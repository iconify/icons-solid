import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f0q9z6r9j.css';
import '../../css/n/nke5d1h5y.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="f0q9z6r9j"/><path class="nke5d1h5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:movie-play"} {...others} />);
}

export default Component;
