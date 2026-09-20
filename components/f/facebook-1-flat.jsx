import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emajh7b1l.css';
import '../../css/t/ty62gxbpt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="emajh7b1l"/><path class="ty62gxbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:facebook-1-flat"} {...others} />);
}

export default Component;
