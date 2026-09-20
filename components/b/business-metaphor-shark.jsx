import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fjiiugs0p.css';
import '../../css/t/t1whsxqdu.css';
import '../../css/w/wgfaujbey.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fjiiugs0p"/><path class="t1whsxqdu"/><path class="wgfaujbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-metaphor-shark"} {...others} />);
}

export default Component;
