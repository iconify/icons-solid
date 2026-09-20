import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bn8y6suty.css';
import '../../css/f/fyibwt4bd.css';
import '../../css/h/hhd17-bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bn8y6suty"/><path clip-rule="evenodd" class="fyibwt4bd"/><path class="hhd17-bgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-replace-duotone"} {...others} />);
}

export default Component;
