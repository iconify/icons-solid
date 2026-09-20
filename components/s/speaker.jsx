import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/m/mxvdyg8ma.css';
import '../../css/f/f0q_56b3q.css';
import '../../css/s/snu70y3dj.css';
import '../../css/j/jepmprb-w.css';
import '../../css/u/u4q7jrreg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="mxvdyg8ma"/><path class="f0q_56b3q"/><path class="snu70y3dj"/><path class="jepmprb-w"/><path class="u4q7jrreg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:speaker"} {...others} />);
}

export default Component;
