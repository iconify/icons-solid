import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juh0qibpl.css';
import '../../css/q/qwbenrq8i.css';
import '../../css/w/wnm3xrb7a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="juh0qibpl"/><path class="qwbenrq8i"/><path class="wnm3xrb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:suggested-investigations"} {...others} />);
}

export default Component;
