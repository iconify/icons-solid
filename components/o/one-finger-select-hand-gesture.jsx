import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6rawmbjk.css';
import '../../css/j/jy40m9mst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w6rawmbjk"/><path class="jy40m9mst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:one-finger-select-hand-gesture"} {...others} />);
}

export default Component;
