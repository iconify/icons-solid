import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5zvm9q9e.css';
import '../../css/u/u-fcgxbzx.css';
import '../../css/e/e7ble4bav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v5zvm9q9e"/><path clip-rule="evenodd" class="u-fcgxbzx"/><path class="e7ble4bav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-out-box"} {...others} />);
}

export default Component;
