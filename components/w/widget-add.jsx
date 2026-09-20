import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy5tg3qjq.css';
import '../../css/f/f1wgwye4w.css';
import '../../css/t/t4lvtfbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xy5tg3qjq"/><path class="f1wgwye4w"/><path clip-rule="evenodd" class="t4lvtfbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:widget-add"} {...others} />);
}

export default Component;
