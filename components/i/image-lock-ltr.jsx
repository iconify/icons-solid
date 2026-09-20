import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg7hmzy4m.css';
import '../../css/j/jh2kfpbhx.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gg7hmzy4m"/><path class="jh2kfpbhx"/><circle class="k79q3xboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-lock-ltr"} {...others} />);
}

export default Component;
