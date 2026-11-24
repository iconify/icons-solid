import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt5pu7wpk.css';
import '../../css/n/nwez_dbwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rt5pu7wpk"/><path class="nwez_dbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cctv-off-filled"} {...others} />);
}

export default Component;
