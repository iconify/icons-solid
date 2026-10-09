import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvg-drbfm.css';
import '../../css/v/vx3fhbbqc.css';
import '../../css/k/kjepdxb8e.css';
import '../../css/j/jthdzbbfe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dvg-drbfm"/><path class="vx3fhbbqc"/><path class="kjepdxb8e"/><path class="jthdzbbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-key-20-bold"} {...others} />);
}

export default Component;
