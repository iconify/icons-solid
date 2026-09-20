import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0ivb_dxm.css';
import '../../css/r/r6albebkr.css';
import '../../css/x/x1s42zb9b.css';
import '../../css/g/g541p9bqx.css';
import '../../css/r/rkwttkbxx.css';
import '../../css/x/xzjj9xbyh.css';
import '../../css/d/d5p4hxagb.css';

const viewBox = {"width":1024,"height":851};
const content = `<g class="ft5dv1b6b"><path class="r0ivb_dxm"/><path class="r6albebkr"/><path class="x1s42zb9b"/><path class="g541p9bqx"/><path class="rkwttkbxx"/><path class="xzjj9xbyh"/><path class="d5p4hxagb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openhunts"} {...others} />);
}

export default Component;
