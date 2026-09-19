import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6jdizb9p.css';
import '../../css/g/griwawmpa.css';
import '../../css/d/dygw907sv.css';
import '../../css/j/jxcjplb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6jdizb9p"/><path clip-rule="evenodd" class="griwawmpa"/><path clip-rule="evenodd" class="dygw907sv"/><path clip-rule="evenodd" class="jxcjplb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:moon-filled"} {...others} />);
}

export default Component;
