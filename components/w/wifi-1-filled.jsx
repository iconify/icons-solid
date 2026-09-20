import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd6if1b-n.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="qd6if1b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wifi-1-filled"} {...others} />);
}

export default Component;
