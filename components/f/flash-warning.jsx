import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy33mbb1m.css';
import '../../css/b/bh-0a2_gz.css';
import '../../css/c/c89945b0n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oy33mbb1m"/><path class="bh-0a2_gz"/><path class="c89945b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:flash-warning"} {...others} />);
}

export default Component;
