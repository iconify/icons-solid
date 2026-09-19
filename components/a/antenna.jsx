import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/goh2ztbxu.css';
import '../../css/o/oki7r90qi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="goh2ztbxu"/><path class="oki7r90qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:antenna"} {...others} />);
}

export default Component;
