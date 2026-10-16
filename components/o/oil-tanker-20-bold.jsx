import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5dhy6b4r.css';
import '../../css/o/o0s_5jy_f.css';
import '../../css/f/fn5st7b7q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f5dhy6b4r"/><path class="o0s_5jy_f"/><path class="fn5st7b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-tanker-20-bold"} {...others} />);
}

export default Component;
