import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy21z1bhf.css';
import '../../css/u/u-tgs14dj.css';
import '../../css/s/s7w-ymlec.css';
import '../../css/g/gwe793bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dy21z1bhf"/><path class="u-tgs14dj"/><path class="s7w-ymlec"/><path class="gwe793bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:watermelon"} {...others} />);
}

export default Component;
