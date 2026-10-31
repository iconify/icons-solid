import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j58fo5boa.css';
import '../../css/n/nl5urroan.css';
import '../../css/n/nzn5jmbcw.css';
import '../../css/v/vbt6lu91g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j58fo5boa"/><path class="nl5urroan"/><path clip-rule="evenodd" class="nzn5jmbcw"/><path clip-rule="evenodd" class="vbt6lu91g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:farm-pop"} {...others} />);
}

export default Component;
