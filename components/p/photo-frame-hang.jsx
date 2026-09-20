import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v37go_bat.css';
import '../../css/x/x1upmdj7u.css';
import '../../css/e/e3gyqtblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v37go_bat"/><path class="x1upmdj7u"/><path class="e3gyqtblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:photo-frame-hang"} {...others} />);
}

export default Component;
