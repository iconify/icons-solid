import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl9l-cbsp.css';
import '../../css/p/pejn30ben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl9l-cbsp"/><path class="pejn30ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-signal-bold"} {...others} />);
}

export default Component;
