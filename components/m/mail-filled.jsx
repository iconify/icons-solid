import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcs-u5b0a.css';
import '../../css/k/kf0teob-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcs-u5b0a"/><path class="kf0teob-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mail-filled"} {...others} />);
}

export default Component;
