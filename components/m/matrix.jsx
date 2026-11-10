import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6wedcysg.css';
import '../../css/j/jiz6i4e4q.css';
import '../../css/v/va1l46f4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d6wedcysg"/><path class="jiz6i4e4q"/><path class="va1l46f4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:matrix"} {...others} />);
}

export default Component;
