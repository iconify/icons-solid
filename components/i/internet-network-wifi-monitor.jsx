import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bscwe4z-x.css';
import '../../css/i/iuqenpiuh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bscwe4z-x"/><path class="iuqenpiuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-wifi-monitor"} {...others} />);
}

export default Component;
