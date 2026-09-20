import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7jrfabap.css';
import '../../css/d/d9gt7ubmd.css';
import '../../css/b/bqi83ybbu.css';
import '../../css/n/ngiqg3b3w.css';
import '../../css/z/zi962dc0l.css';
import '../../css/o/o_eah0bbk.css';
import '../../css/g/gky4ambra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u7jrfabap"/><path class="d9gt7ubmd"/><path class="bqi83ybbu"/><path class="ngiqg3b3w"/><path class="zi962dc0l"/><path class="o_eah0bbk"/><path class="gky4ambra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wifi-signal-2"} {...others} />);
}

export default Component;
