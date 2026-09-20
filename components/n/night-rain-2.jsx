import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bokm_l4hs.css';
import '../../css/n/n4cd77bbe.css';
import '../../css/n/n11eljbfr.css';
import '../../css/m/mg6580roj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bokm_l4hs"/><path class="n4cd77bbe"/><path class="n11eljbfr"/><path class="mg6580roj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:night-rain-2"} {...others} />);
}

export default Component;
