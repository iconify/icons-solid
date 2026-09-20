import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9azt2ycm.css';
import '../../css/z/z13jkwbug.css';
import '../../css/u/uenwpkvfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t9azt2ycm"/><path class="z13jkwbug"/><path class="uenwpkvfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:highlighted-block"} {...others} />);
}

export default Component;
