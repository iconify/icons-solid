import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fotb8jbur.css';
import '../../css/r/r8p5v9bdz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fotb8jbur"/><path class="r8p5v9bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-down-left"} {...others} />);
}

export default Component;
