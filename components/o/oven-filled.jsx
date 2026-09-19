import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjk_cab6w.css';
import '../../css/u/u7j1z5bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjk_cab6w"/><path class="u7j1z5bkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:oven-filled"} {...others} />);
}

export default Component;
