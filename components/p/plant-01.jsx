import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hukkky9-z.css';
import '../../css/b/b0421gdmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hukkky9-z"/><path class="b0421gdmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plant-01"} {...others} />);
}

export default Component;
