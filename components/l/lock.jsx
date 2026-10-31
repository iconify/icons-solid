import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thvrl_b5e.css';
import '../../css/m/mkdyumbaw.css';
import '../../css/k/kzbjxkbod.css';
import '../../css/b/bx4l1wbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="thvrl_b5e wm-shadow"/><path class="mkdyumbaw wm-shadow"/><path class="kzbjxkbod"/><path class="bx4l1wbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lock"} {...others} />);
}

export default Component;
