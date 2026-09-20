import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abpbywgdg.css';
import '../../css/i/i-4b5jb7d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="abpbywgdg"/><path class="i-4b5jb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:navigation-arrow-on"} {...others} />);
}

export default Component;
