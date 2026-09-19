import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbjufu-2w.css';
import '../../css/a/a0sygjdrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pbjufu-2w"/><path class="a0sygjdrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laptop-video"} {...others} />);
}

export default Component;
