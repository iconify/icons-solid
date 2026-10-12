import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usigsbd8n.css';
import '../../css/d/du-r1xbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="usigsbd8n"/><path class="du-r1xbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:alarm-clock-check-filled"} {...others} />);
}

export default Component;
