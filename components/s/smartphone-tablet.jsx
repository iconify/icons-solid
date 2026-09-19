import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyk27hxcx.css';
import '../../css/l/lxvvbdcsj.css';
import '../../css/u/u90_kz3vk.css';
import '../../css/v/vsnq63-xh.css';
import '../../css/v/vzkmoxbec.css';
import '../../css/u/u81171hdw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qyk27hxcx"/><path class="lxvvbdcsj"/><path class="u90_kz3vk"/><path class="vsnq63-xh"/><path class="vzkmoxbec"/><circle class="u81171hdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:smartphone-tablet"} {...others} />);
}

export default Component;
