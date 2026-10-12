import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvql5q15h.css';
import '../../css/v/v8spg71sl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvql5q15h"/><path clip-rule="evenodd" class="v8spg71sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:compass-filled"} {...others} />);
}

export default Component;
