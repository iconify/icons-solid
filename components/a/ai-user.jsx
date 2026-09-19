import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qho-vbgvk.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/d/d7riv2b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qho-vbgvk"/><path class="dg7qrmb6g"/><path class="d7riv2b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-user"} {...others} />);
}

export default Component;
