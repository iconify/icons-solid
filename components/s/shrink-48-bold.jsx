import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt2_w2b_f.css';
import '../../css/e/etdoy3bgw.css';
import '../../css/g/gc-e6wn8x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jt2_w2b_f"/><path class="etdoy3bgw"/><path class="gc-e6wn8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shrink-48-bold"} {...others} />);
}

export default Component;
