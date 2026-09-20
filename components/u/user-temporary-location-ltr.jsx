import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhdtu4l9b.css';
import '../../css/h/hzbrfoizy.css';
import '../../css/d/do_17v_nq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zhdtu4l9b"/><path class="hzbrfoizy"/><circle class="do_17v_nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-temporary-location-ltr"} {...others} />);
}

export default Component;
