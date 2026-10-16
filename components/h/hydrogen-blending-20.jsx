import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo928wb-m.css';
import '../../css/v/v-mja07rt.css';
import '../../css/k/k494c0bpc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oo928wb-m"/><path class="v-mja07rt"/><path class="k494c0bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-blending-20"} {...others} />);
}

export default Component;
