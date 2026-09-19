import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w26gjsv3k.css';
import '../../css/j/jxs7zfb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w26gjsv3k"/><path class="jxs7zfb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:rocket-filled"} {...others} />);
}

export default Component;
