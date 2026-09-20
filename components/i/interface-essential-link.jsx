import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl0knccre.css';
import '../../css/i/iqt0h4b6a.css';
import '../../css/x/xncxpgo4a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vl0knccre"/><path class="iqt0h4b6a"/><path class="xncxpgo4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-link"} {...others} />);
}

export default Component;
