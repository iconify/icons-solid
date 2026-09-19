import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gysusqbhb.css';
import '../../css/p/przl2b9sg.css';
import '../../css/e/e4c10cqye.css';
import '../../css/q/qlqmuob1m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="gysusqbhb"/><path class="przl2b9sg"/><circle class="e4c10cqye"/><path class="qlqmuob1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:outbound"} {...others} />);
}

export default Component;
