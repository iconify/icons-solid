import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qklghdczf.css';
import '../../css/o/olpeleb8t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qklghdczf"/><path class="olpeleb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acorn-20"} {...others} />);
}

export default Component;
