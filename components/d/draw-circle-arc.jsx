import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh8ym9dvi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jh8ym9dvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:draw-circle-arc"} {...others} />);
}

export default Component;
