import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9x3on9_b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f9x3on9_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickleball-paddle-with-ball"} {...others} />);
}

export default Component;
