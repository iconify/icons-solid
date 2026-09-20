import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxjo86bzj.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/c/c2kux8r3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zxjo86bzj"/><path class="gsx79b0zp"/><path class="c2kux8r3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:inbox-out-filled"} {...others} />);
}

export default Component;
