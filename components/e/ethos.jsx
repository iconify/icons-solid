import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkj-c5bmo.css';
import '../../css/m/md286fbip.css';
import '../../css/q/qz8pqxbrv.css';
import '../../css/r/r60l57pvp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="nkj-c5bmo"/><g class="md286fbip"><path class="qz8pqxbrv"/><path class="r60l57pvp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ethos"} {...others} />);
}

export default Component;
