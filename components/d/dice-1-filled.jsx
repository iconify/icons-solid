import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm8b7yb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm8b7yb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dice-1-filled"} {...others} />);
}

export default Component;
