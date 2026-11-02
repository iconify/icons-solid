import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7weevkfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7weevkfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:droplet-off-fill"} {...others} />);
}

export default Component;
