import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6qm1-1vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6qm1-1vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-imac-share"} {...others} />);
}

export default Component;
