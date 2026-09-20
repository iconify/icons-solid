import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_0od71p.css';
import '../../css/r/rtoehfmih.css';
import '../../css/n/nj76ojbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ja_0od71p"/><path clip-rule="evenodd" class="rtoehfmih"/><path clip-rule="evenodd" class="nj76ojbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-bold"} {...others} />);
}

export default Component;
