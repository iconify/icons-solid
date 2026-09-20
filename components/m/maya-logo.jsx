import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c55xrgbvk.css';
import '../../css/c/c4ux4lfrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="c55xrgbvk"/><path class="c4ux4lfrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:maya-logo"} {...others} />);
}

export default Component;
