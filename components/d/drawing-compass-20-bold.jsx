import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rill5m66m.css';
import '../../css/e/ei2u0fbjq.css';
import '../../css/h/hf9qlabiz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rill5m66m"/><path class="ei2u0fbjq"/><path class="hf9qlabiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drawing-compass-20-bold"} {...others} />);
}

export default Component;
