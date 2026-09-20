import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/c/co3ln_bdz.css';
import '../../css/e/ef_rn3vnq.css';
import '../../css/o/ojti8sbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="co3ln_bdz"/><path class="ef_rn3vnq"/><path class="ojti8sbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:synchronize-loop"} {...others} />);
}

export default Component;
