import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmut65bkr.css';
import '../../css/i/idc7-cb9a.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmut65bkr"/><path class="idc7-cb9a"/><path class="rp7oy-b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:finn-light"} {...others} />);
}

export default Component;
