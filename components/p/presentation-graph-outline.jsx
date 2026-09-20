import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edm1jx-qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="edm1jx-qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:presentation-graph-outline"} {...others} />);
}

export default Component;
