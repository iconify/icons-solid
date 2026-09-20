import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrbyoki8y.css';
import '../../css/f/f7bcmk4ln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jrbyoki8y"/><path class="f7bcmk4ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:crown-duotone"} {...others} />);
}

export default Component;
