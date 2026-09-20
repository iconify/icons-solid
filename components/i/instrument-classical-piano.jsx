import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-x24yb0b.css';
import '../../css/q/quhpe2b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-x24yb0b"/><path class="quhpe2b8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instrument-classical-piano"} {...others} />);
}

export default Component;
