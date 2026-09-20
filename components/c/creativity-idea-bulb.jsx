import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk04f3blh.css';
import '../../css/f/f080jsesr.css';
import '../../css/s/sql18ebfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qk04f3blh"/><path class="f080jsesr"/><path class="sql18ebfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:creativity-idea-bulb"} {...others} />);
}

export default Component;
