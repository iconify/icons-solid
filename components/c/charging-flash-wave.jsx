import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w1iepxd2f.css';
import '../../css/u/ukr3sfz5i.css';
import '../../css/d/df-lbeb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w1iepxd2f"/><path class="ukr3sfz5i"/><path class="df-lbeb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:charging-flash-wave"} {...others} />);
}

export default Component;
