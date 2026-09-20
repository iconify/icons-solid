import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozs9embjz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ozs9embjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:die-face-with-five-pips"} {...others} />);
}

export default Component;
