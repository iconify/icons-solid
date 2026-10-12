import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yynfaacui.css';
import '../../css/w/wyyg1obun.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yynfaacui"/><path class="wyyg1obun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-stroke-20"} {...others} />);
}

export default Component;
