import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w02ikvxvn.css';
import '../../css/a/aeym-h-fc.css';
import '../../css/q/qjkjlg6zo.css';
import '../../css/f/fn0lv9b9m.css';
import '../../css/f/fg6vzqb3y.css';
import '../../css/k/ktyx86b0z.css';
import '../../css/j/jvlqfbnjo.css';
import '../../css/e/em663xb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w02ikvxvn"/><path class="aeym-h-fc"/><path class="qjkjlg6zo"/><path clip-rule="evenodd" class="fn0lv9b9m"/><path class="fg6vzqb3y"/><path class="ktyx86b0z"/><path class="jvlqfbnjo"/><path class="em663xb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-bold-duotone"} {...others} />);
}

export default Component;
