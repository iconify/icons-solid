import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba63usbyw.css';
import '../../css/f/f3e8vhbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba63usbyw"/><path class="f3e8vhbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:slr"} {...others} />);
}

export default Component;
