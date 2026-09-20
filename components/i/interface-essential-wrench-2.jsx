import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zenio235y.css';
import '../../css/p/pk8x84bjp.css';
import '../../css/j/jedy8pbrj.css';
import '../../css/q/qq61z-bmt.css';
import '../../css/a/a59et-buu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zenio235y"/><path class="pk8x84bjp"/><path class="jedy8pbrj"/><path class="qq61z-bmt"/><path class="a59et-buu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-wrench-2"} {...others} />);
}

export default Component;
