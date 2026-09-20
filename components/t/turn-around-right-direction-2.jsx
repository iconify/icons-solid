import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/twruf6b3g.css';
import '../../css/f/fv9fdabit.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="twruf6b3g"/><path class="fv9fdabit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:turn-around-right-direction-2"} {...others} />);
}

export default Component;
