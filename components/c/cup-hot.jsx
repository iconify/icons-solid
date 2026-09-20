import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i39v-mbex.css';
import '../../css/e/e4k17xbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i39v-mbex"/><path class="e4k17xbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:cup-hot"} {...others} />);
}

export default Component;
