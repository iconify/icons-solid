import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2rydrbmw.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i-ys325mo.css';
import '../../css/a/an6b-accw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="f2rydrbmw"/><g class="md286fbip"><path class="i-ys325mo"/><path class="an6b-accw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dash"} {...others} />);
}

export default Component;
