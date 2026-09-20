import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8p995ben.css';
import '../../css/h/hpnmk0bah.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i8p995ben"/><path class="hpnmk0bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:puzzled-fill"} {...others} />);
}

export default Component;
