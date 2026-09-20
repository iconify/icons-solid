import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olkjptb9x.css';
import '../../css/e/ep58dcbkb.css';
import '../../css/j/j-md4pbor.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="olkjptb9x"/><path class="ep58dcbkb"/><path class="j-md4pbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:arrow-roadmap"} {...others} />);
}

export default Component;
