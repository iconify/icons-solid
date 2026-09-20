import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggnuxxlrx.css';
import '../../css/x/xdjgyjbwj.css';
import '../../css/t/twji5-hcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ggnuxxlrx"/><path class="xdjgyjbwj"/><path class="twji5-hcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ram2-filled"} {...others} />);
}

export default Component;
