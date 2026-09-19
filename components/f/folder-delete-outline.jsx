import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0tan9jgf.css';
import '../../css/f/f_tab8g_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0tan9jgf"/><path clip-rule="evenodd" class="f_tab8g_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:folder-delete-outline"} {...others} />);
}

export default Component;
