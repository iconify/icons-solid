import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxg-_if6l.css';
import '../../css/z/zngdjrb_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qxg-_if6l"/><path class="zngdjrb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:un-lock"} {...others} />);
}

export default Component;
