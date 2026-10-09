import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/e/ed20mnbov.css';
import '../../css/s/swg_cpy_k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="ed20mnbov"/><path class="swg_cpy_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radar-20"} {...others} />);
}

export default Component;
