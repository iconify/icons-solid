import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmwchobpn.css';
import '../../css/e/e8_03wb-a.css';
import '../../css/a/av5-hcwri.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vmwchobpn"/><path class="e8_03wb-a"/><path class="av5-hcwri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:drop-of-blood"} {...others} />);
}

export default Component;
