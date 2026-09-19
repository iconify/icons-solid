import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zytnknbqy.css';
import '../../css/h/hxrdmob8v.css';
import '../../css/j/j1_yf7_6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zytnknbqy"/><path class="hxrdmob8v"/><path class="j1_yf7_6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:factory-breakdown"} {...others} />);
}

export default Component;
