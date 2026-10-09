import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkejm8ive.css';
import '../../css/f/fpp32ib9p.css';
import '../../css/t/tepjeob2b.css';
import '../../css/e/enngo8bkk.css';
import '../../css/y/y0pk5fbbb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fkejm8ive"/><path class="fpp32ib9p"/><path class="tepjeob2b"/><path class="enngo8bkk"/><path class="y0pk5fbbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-fleet-20"} {...others} />);
}

export default Component;
