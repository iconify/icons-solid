import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k54_jgbmz.css';
import '../../css/w/wwzneb9rp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k54_jgbmz"/><path class="wwzneb9rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:usergroup-add-filled"} {...others} />);
}

export default Component;
