import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8gghnbuu.css';
import '../../css/x/xhxzdg_-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8gghnbuu"/><path clip-rule="evenodd" class="xhxzdg_-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:air-vent-filled"} {...others} />);
}

export default Component;
