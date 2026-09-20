import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eel-4gt1b.css';
import '../../css/a/ap3xz1bbt.css';
import '../../css/e/evg2pjbkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eel-4gt1b"/><path class="ap3xz1bbt"/><path class="evg2pjbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-with-files-linear"} {...others} />);
}

export default Component;
