import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfqeopbvu.css';
import '../../css/i/imc9g1buu.css';
import '../../css/z/z0dqlcz2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zfqeopbvu"/><path clip-rule="evenodd" class="imc9g1buu"/><path class="z0dqlcz2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-laptop-filled"} {...others} />);
}

export default Component;
