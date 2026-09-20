import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9rc0ma9t.css';
import '../../css/u/u8qfb2wkp.css';
import '../../css/c/cp1-_fbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r9rc0ma9t"/><path class="u8qfb2wkp"/><path class="cp1-_fbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:envelope-check-filled"} {...others} />);
}

export default Component;
