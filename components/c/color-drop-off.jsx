import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5azz_9_f.css';
import '../../css/t/t7jm-lbaz.css';
import '../../css/q/qtlrajbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a5azz_9_f"/><path class="t7jm-lbaz"/><path class="qtlrajbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-drop-off"} {...others} />);
}

export default Component;
