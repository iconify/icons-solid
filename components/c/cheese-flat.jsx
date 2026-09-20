import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjrqtwk2v.css';
import '../../css/c/cs5wq_l0e.css';
import '../../css/a/aan5-q78p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jjrqtwk2v"/><path class="cs5wq_l0e"/><path class="aan5-q78p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cheese-flat"} {...others} />);
}

export default Component;
