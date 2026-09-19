import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj6jfsbht.css';
import '../../css/z/zalemybnx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wj6jfsbht"/><path class="zalemybnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:poultryleg"} {...others} />);
}

export default Component;
