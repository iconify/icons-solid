import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhtv58b8b.css';
import '../../css/q/qou13c05m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bhtv58b8b"/><path class="qou13c05m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:battery-4-filled"} {...others} />);
}

export default Component;
