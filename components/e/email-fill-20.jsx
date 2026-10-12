import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtwmiac1q.css';
import '../../css/r/re_226bct.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtwmiac1q"/><path class="re_226bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:email-fill-20"} {...others} />);
}

export default Component;
