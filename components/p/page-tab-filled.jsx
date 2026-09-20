import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh13jvbja.css';
import '../../css/m/mdi0c_bip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jh13jvbja"/><path class="mdi0c_bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:page-tab-filled"} {...others} />);
}

export default Component;
