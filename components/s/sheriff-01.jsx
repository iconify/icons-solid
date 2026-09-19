import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2s0gacxz.css';
import '../../css/q/qgsmsue-g.css';
import '../../css/f/f1zijr3ch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e2s0gacxz"/><path class="qgsmsue-g"/><path class="f1zijr3ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sheriff-01"} {...others} />);
}

export default Component;
