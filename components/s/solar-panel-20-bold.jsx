import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs1iioq3v.css';
import '../../css/u/ujdtqrbjr.css';
import '../../css/t/t5fnm26xn.css';
import '../../css/d/d2qyootpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gs1iioq3v"/><path class="ujdtqrbjr"/><path class="t5fnm26xn"/><path class="d2qyootpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-20-bold"} {...others} />);
}

export default Component;
