import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juvuk6mdh.css';
import '../../css/f/fi4s-dblz.css';

const viewBox = {"width":2500,"height":2500};
const content = `<path class="juvuk6mdh"/><path class="fi4s-dblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:npm"} {...others} />);
}

export default Component;
