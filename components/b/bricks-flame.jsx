import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4k4gtbtk.css';
import '../../css/b/bne3dkbdq.css';
import '../../css/l/l64rzsblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b4k4gtbtk"/><path class="bne3dkbdq"/><path class="l64rzsblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bricks-flame"} {...others} />);
}

export default Component;
