import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyuoiib2w.css';
import '../../css/b/b6kmhlhnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyuoiib2w"/><path clip-rule="evenodd" class="b6kmhlhnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-1-filled"} {...others} />);
}

export default Component;
