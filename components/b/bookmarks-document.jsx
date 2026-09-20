import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouby7sb8k.css';
import '../../css/q/qvw5nmb5l.css';
import '../../css/j/joc9-lbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ouby7sb8k"/><path class="qvw5nmb5l"/><path class="joc9-lbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:bookmarks-document"} {...others} />);
}

export default Component;
