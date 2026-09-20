import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz7jn38ey.css';
import '../../css/y/ynkxq5xnv.css';
import '../../css/a/asevnlbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz7jn38ey"/><path class="ynkxq5xnv"/><path class="asevnlbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ice"} {...others} />);
}

export default Component;
