import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os_e7fbgt.css';
import '../../css/b/b8g_udb9j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="os_e7fbgt"/><path class="b8g_udb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chip"} {...others} />);
}

export default Component;
