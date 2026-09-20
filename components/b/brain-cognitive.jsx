import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px1xqnh9t.css';
import '../../css/t/tyuqqk9gd.css';
import '../../css/x/xc4wsqbeg.css';
import '../../css/v/v06synbhn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="px1xqnh9t"/><path clip-rule="evenodd" class="tyuqqk9gd"/><path class="xc4wsqbeg"/><path class="v06synbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:brain-cognitive"} {...others} />);
}

export default Component;
