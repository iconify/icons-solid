import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_i17xbai.css';
import '../../css/l/llov8mbku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_i17xbai"/><path class="llov8mbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-terminal-filled"} {...others} />);
}

export default Component;
