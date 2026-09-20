import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffx328bzc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ffx328bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:die-face-with-three-pips"} {...others} />);
}

export default Component;
