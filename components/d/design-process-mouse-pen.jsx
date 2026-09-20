import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vax5azbnf.css';
import '../../css/v/vk9eh59hs.css';
import '../../css/f/f-p31mb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vax5azbnf"/><path class="vk9eh59hs"/><path class="f-p31mb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:design-process-mouse-pen"} {...others} />);
}

export default Component;
