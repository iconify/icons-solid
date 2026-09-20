import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/m/mkkam-3zu.css';
import '../../css/o/ohd43jbpw.css';
import '../../css/e/ecgznvajd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="mkkam-3zu"/><path class="ohd43jbpw"/><path class="ecgznvajd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:loop-diamond-2"} {...others} />);
}

export default Component;
