import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jywqcccww.css';
import '../../css/h/h8tqn3whx.css';
import '../../css/i/i6m4vqb5f.css';
import '../../css/c/c4-i9zhie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jywqcccww"/><path class="h8tqn3whx"/><path class="i6m4vqb5f"/><path class="c4-i9zhie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-wireless-problem"} {...others} />);
}

export default Component;
