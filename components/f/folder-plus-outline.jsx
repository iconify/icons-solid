import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0lbe88nw.css';
import '../../css/f/f_tab8g_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0lbe88nw"/><path clip-rule="evenodd" class="f_tab8g_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-plus-outline"} {...others} />);
}

export default Component;
