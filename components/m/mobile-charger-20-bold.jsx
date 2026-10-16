import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzf2ejbga.css';
import '../../css/o/o21t2h-ii.css';
import '../../css/l/lv-tnswjo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kzf2ejbga"/><path class="o21t2h-ii"/><path class="lv-tnswjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mobile-charger-20-bold"} {...others} />);
}

export default Component;
