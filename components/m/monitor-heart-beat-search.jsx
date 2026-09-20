import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q69f2svbj.css';
import '../../css/t/tvkje7yvq.css';
import '../../css/c/cznv7mb2h.css';
import '../../css/g/ggvr77bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q69f2svbj"/><path class="tvkje7yvq"/><path class="cznv7mb2h"/><path class="ggvr77bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-heart-beat-search"} {...others} />);
}

export default Component;
