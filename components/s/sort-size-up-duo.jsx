import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig2bcdcka.css';
import '../../css/h/hgu5suxck.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ig2bcdcka"/><path class="hgu5suxck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-size-up-duo"} {...others} />);
}

export default Component;
