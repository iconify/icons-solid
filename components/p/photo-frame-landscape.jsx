import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cy--hwbiq.css';
import '../../css/j/juysrnb7h.css';
import '../../css/e/et3u5blgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cy--hwbiq"/><path class="juysrnb7h"/><path class="et3u5blgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:photo-frame-landscape"} {...others} />);
}

export default Component;
