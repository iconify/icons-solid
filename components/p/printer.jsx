import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anhkjmhdr.css';
import '../../css/o/owa8ozb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="anhkjmhdr"/><path clip-rule="evenodd" class="owa8ozb7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:printer"} {...others} />);
}

export default Component;
