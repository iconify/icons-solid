import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqjbkfhng.css';
import '../../css/i/i_xm1xkcl.css';
import '../../css/i/iz7xyshmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uqjbkfhng"/><path class="i_xm1xkcl"/><path class="iz7xyshmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-cross-bold"} {...others} />);
}

export default Component;
