import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anfmxfb2p.css';
import '../../css/a/a97053_8f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="anfmxfb2p"/><path class="a97053_8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:signal-medium"} {...others} />);
}

export default Component;
