import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou56adbok.css';
import '../../css/h/h_2d7brce.css';
import '../../css/f/fzqb7dbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ou56adbok"/><path class="h_2d7brce"/><path clip-rule="evenodd" class="fzqb7dbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:strategy-tasks-flat"} {...others} />);
}

export default Component;
