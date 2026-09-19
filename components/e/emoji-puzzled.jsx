import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-18_0nso.css';
import '../../css/a/a7blko62y.css';
import '../../css/n/n4inx3b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y-18_0nso"/><path class="a7blko62y"/><path class="n4inx3b9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-puzzled"} {...others} />);
}

export default Component;
