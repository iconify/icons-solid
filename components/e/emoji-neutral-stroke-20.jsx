import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yynfaacui.css';
import '../../css/t/tbe9gjgli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yynfaacui"/><path class="tbe9gjgli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:emoji-neutral-stroke-20"} {...others} />);
}

export default Component;
