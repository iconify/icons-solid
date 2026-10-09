import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk-8-cbtr.css';
import '../../css/e/eczeehbxy.css';
import '../../css/d/df1n7oboy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zk-8-cbtr"/><path class="eczeehbxy"/><path class="df1n7oboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:double-glazing-48"} {...others} />);
}

export default Component;
