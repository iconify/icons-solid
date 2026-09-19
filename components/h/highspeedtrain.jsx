import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwt5b9bfz.css';
import '../../css/f/f3xqw0bgu.css';
import '../../css/z/zo1tn8goq.css';
import '../../css/a/avyxgbc4y.css';
import '../../css/n/ngmmdib6j.css';
import '../../css/x/xubqrvbqg.css';
import '../../css/u/uydl4x-xj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwt5b9bfz"/><path class="f3xqw0bgu"/><path class="zo1tn8goq"/><path class="avyxgbc4y"/><ellipse class="ngmmdib6j"/><path class="xubqrvbqg"/><path class="uydl4x-xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:highspeedtrain"} {...others} />);
}

export default Component;
