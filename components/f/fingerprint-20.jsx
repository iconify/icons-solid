import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhlt4li1n.css';
import '../../css/e/e69-qmb1n.css';
import '../../css/t/t08y0ccaw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bhlt4li1n"/><path class="e69-qmb1n"/><path class="t08y0ccaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fingerprint-20"} {...others} />);
}

export default Component;
