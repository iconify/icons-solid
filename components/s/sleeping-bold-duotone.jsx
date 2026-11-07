import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1el_fbgx.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zbke2mcmt.css';
import '../../css/o/oj410s8yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j1el_fbgx"/><g class="xtpeb-edw"><path class="zbke2mcmt"/><path class="oj410s8yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-bold-duotone"} {...others} />);
}

export default Component;
