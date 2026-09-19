import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x733y_y1a.css';
import '../../css/v/v33nqph3n.css';
import '../../css/j/jjgbwem1c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x733y_y1a"/><path clip-rule="evenodd" class="v33nqph3n"/><path class="jjgbwem1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:attention"} {...others} />);
}

export default Component;
