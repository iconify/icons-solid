import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce2fvzi3c.css';
import '../../css/v/v0jecto8p.css';
import '../../css/i/ipgobhife.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ce2fvzi3c"/><path class="v0jecto8p"/><path clip-rule="evenodd" class="ipgobhife"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:calendar-edit-flat"} {...others} />);
}

export default Component;
