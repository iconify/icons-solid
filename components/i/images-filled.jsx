import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g12y8bcqd.css';
import '../../css/h/hbnn0x-oz.css';
import '../../css/y/ylmzesbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g12y8bcqd"/><path class="hbnn0x-oz"/><path class="ylmzesbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:images-filled"} {...others} />);
}

export default Component;
