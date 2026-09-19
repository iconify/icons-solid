import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jldg2jb9v.css';
import '../../css/p/p85xbuxvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jldg2jb9v"/><path class="p85xbuxvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-carrier-blood-1"} {...others} />);
}

export default Component;
