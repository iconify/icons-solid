import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/d/dwgy8tn_c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="dwgy8tn_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-mini-app"} {...others} />);
}

export default Component;
