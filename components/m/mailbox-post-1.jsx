import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b28khiaju.css';
import '../../css/b/b-dw7cc4k.css';
import '../../css/o/obwotbl4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b28khiaju"/><path class="b-dw7cc4k"/><path class="obwotbl4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mailbox-post-1"} {...others} />);
}

export default Component;
