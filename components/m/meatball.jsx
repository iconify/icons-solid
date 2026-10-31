import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujupjyb6d.css';
import '../../css/c/c2llv-b8x.css';
import '../../css/j/jcv35v-6k.css';
import '../../css/w/w9tm4st8a.css';
import '../../css/z/zpmzu5nhp.css';
import '../../css/z/z4ez7-bwh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ujupjyb6d"/><path class="c2llv-b8x"/><path class="jcv35v-6k"/><path class="w9tm4st8a"/><path class="zpmzu5nhp"/><path class="z4ez7-bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:meatball"} {...others} />);
}

export default Component;
