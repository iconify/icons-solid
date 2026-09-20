import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/d/dpnipcczy.css';
import '../../css/k/k23eu_bat.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="h_hxwwbci"/><path class="dpnipcczy"/><path class="k23eu_bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-setting-filled"} {...others} />);
}

export default Component;
