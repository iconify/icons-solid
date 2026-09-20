import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p928398kq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p928398kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:die-face-with-six-pips"} {...others} />);
}

export default Component;
