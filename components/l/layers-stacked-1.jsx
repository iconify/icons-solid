import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oosqojbsx.css';
import '../../css/b/by2vf8dex.css';
import '../../css/f/f8j61zkcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oosqojbsx"/><path class="by2vf8dex"/><path class="f8j61zkcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:layers-stacked-1"} {...others} />);
}

export default Component;
