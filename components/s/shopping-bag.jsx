import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj7hf3b6m.css';
import '../../css/s/ssdo0ob-m.css';
import '../../css/c/c7hixzgbo.css';
import '../../css/c/ct0vsj1oc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hj7hf3b6m"/><path class="ssdo0ob-m"/><path class="c7hixzgbo"/><path class="ct0vsj1oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-bag"} {...others} />);
}

export default Component;
