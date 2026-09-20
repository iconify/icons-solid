import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2-87xm7h.css';
import '../../css/w/wn8qupbsc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b2-87xm7h"/><path class="wn8qupbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:open-umbrella"} {...others} />);
}

export default Component;
