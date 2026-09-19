import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdjevjbzr.css';
import '../../css/b/bvjh5-rxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hdjevjbzr"/><path class="bvjh5-rxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sleeper-chair"} {...others} />);
}

export default Component;
