import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyv0rce4w.css';
import '../../css/m/m5_8ni9aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iyv0rce4w"/><path class="m5_8ni9aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:candy-off-filled"} {...others} />);
}

export default Component;
