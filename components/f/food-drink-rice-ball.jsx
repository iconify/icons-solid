import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeak3x6ce.css';
import '../../css/u/uhxf3cb6o.css';
import '../../css/m/mxjjttnft.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eeak3x6ce"/><path class="uhxf3cb6o"/><path class="mxjjttnft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-rice-ball"} {...others} />);
}

export default Component;
