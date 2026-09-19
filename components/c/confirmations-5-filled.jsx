import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmf71jbnp.css';
import '../../css/d/d6aw1qt_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmf71jbnp"/><path clip-rule="evenodd" class="d6aw1qt_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-5-filled"} {...others} />);
}

export default Component;
