import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zeoh9dbgl.css';
import '../../css/c/ck9o18b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zeoh9dbgl"/><path class="ck9o18b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:whatsapp-logo"} {...others} />);
}

export default Component;
