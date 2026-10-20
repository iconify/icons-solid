import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvlujqvom.css';
import '../../css/o/o6vqyfbqf.css';
import '../../css/t/tks4l1bml.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvlujqvom"/><path class="o6vqyfbqf"/><path class="tks4l1bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flask-20"} {...others} />);
}

export default Component;
