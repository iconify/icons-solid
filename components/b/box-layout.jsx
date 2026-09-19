import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/njn7qhbar.css';
import '../../css/w/w911bxbqf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="njn7qhbar"/><path class="w911bxbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout"} {...others} />);
}

export default Component;
