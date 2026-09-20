import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugipusz4b.css';
import '../../css/m/mygj951iu.css';
import '../../css/l/lot59xl2u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ugipusz4b"/><path clip-rule="evenodd" class="mygj951iu"/><path class="lot59xl2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shelf"} {...others} />);
}

export default Component;
