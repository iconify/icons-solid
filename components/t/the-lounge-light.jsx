import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s70-klbjy.css';
import '../../css/o/o5ainlbbc.css';
import '../../css/d/dzixascez.css';
import '../../css/c/cd7c3hbtx.css';
import '../../css/k/kooj9t3kh.css';
import '../../css/q/qapkbmmbw.css';

const viewBox = {"width":386,"height":276};
const content = `<path class="s70-klbjy"/><circle class="o5ainlbbc"/><circle class="dzixascez"/><path class="cd7c3hbtx"/><circle class="kooj9t3kh"/><circle class="qapkbmmbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:the-lounge-light"} {...others} />);
}

export default Component;
