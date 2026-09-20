import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr5nhmbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr5nhmbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:voice-fill"} {...others} />);
}

export default Component;
