import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/o/owrwcdb_m.css';
import '../../css/h/h7tad2f8k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="owrwcdb_m"/><path class="h7tad2f8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:filter-duo"} {...others} />);
}

export default Component;
