import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t6pa857at.css';
import '../../css/r/r3tp2c0nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t6pa857at"/><path class="r3tp2c0nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:online-learning-03"} {...others} />);
}

export default Component;
