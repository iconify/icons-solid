import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x62k7r4dq.css';
import '../../css/h/hzygurb-i.css';
import '../../css/s/sd66kfpqu.css';
import '../../css/s/s0z9zo7dh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="x62k7r4dq"/><path clip-rule="evenodd" class="hzygurb-i"/><path class="sd66kfpqu"/><path class="s0z9zo7dh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ppt"} {...others} />);
}

export default Component;
