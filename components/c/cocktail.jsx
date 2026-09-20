import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kohy_6vdk.css';
import '../../css/j/j0kcqnbgn.css';
import '../../css/u/umgy3rwzm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kohy_6vdk"/><path class="j0kcqnbgn"/><path class="umgy3rwzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cocktail"} {...others} />);
}

export default Component;
