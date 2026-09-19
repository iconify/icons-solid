import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zukycii2z.css';
import '../../css/o/oma46e18c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zukycii2z"/><path class="oma46e18c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:erase-solid"} {...others} />);
}

export default Component;
