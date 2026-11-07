import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgissgbda.css';
import '../../css/w/w1wl29bmf.css';
import '../../css/c/ckoc0pbbx.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgissgbda"/><path class="w1wl29bmf"/><path class="ckoc0pbbx"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-badge-bold-duotone"} {...others} />);
}

export default Component;
