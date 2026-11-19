import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a97adjg1b.css';
import '../../css/x/xdhs1acgm.css';
import '../../css/v/v1e4mja3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a97adjg1b"/><path class="xdhs1acgm"/><path class="v1e4mja3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:whistle"} {...others} />);
}

export default Component;
