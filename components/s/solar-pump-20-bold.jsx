import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9597wbne.css';
import '../../css/p/pul26ybon.css';
import '../../css/w/wumlmueqb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g9597wbne"/><path class="pul26ybon"/><path class="wumlmueqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-pump-20-bold"} {...others} />);
}

export default Component;
