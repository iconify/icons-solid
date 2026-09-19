import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efw8ff3xu.css';
import '../../css/a/az4vgcc2z.css';
import '../../css/w/wvdhdnwxn.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="efw8ff3xu"/><path class="az4vgcc2z"/><path class="wvdhdnwxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:jasmine"} {...others} />);
}

export default Component;
