import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/y/y5373sjgh.css';
import '../../css/f/fawqjfb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><path class="y5373sjgh"/><path class="fawqjfb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-time"} {...others} />);
}

export default Component;
