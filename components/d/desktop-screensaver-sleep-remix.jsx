import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnhm3dmjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qnhm3dmjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:desktop-screensaver-sleep-remix"} {...others} />);
}

export default Component;
