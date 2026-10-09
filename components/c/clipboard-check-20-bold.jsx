import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0rmdbc9t.css';
import '../../css/i/ivs89hbhc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x0rmdbc9t"/><path class="ivs89hbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-check-20-bold"} {...others} />);
}

export default Component;
