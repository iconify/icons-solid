import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk0fnxbhg.css';
import '../../css/c/cnqulp0bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xk0fnxbhg"/><path class="cnqulp0bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-lol-sideways"} {...others} />);
}

export default Component;
