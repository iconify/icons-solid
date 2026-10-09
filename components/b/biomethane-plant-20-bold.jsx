import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hty7rib1j.css';
import '../../css/q/qho2-b78i.css';
import '../../css/y/y8ouhcctf.css';
import '../../css/k/k6d1kubof.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hty7rib1j"/><path class="qho2-b78i"/><path class="y8ouhcctf"/><path class="k6d1kubof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomethane-plant-20-bold"} {...others} />);
}

export default Component;
