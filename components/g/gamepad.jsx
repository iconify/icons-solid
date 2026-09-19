import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujcvudl0t.css';
import '../../css/k/k6wfv-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ujcvudl0t"/><path class="k6wfv-b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gamepad"} {...others} />);
}

export default Component;
