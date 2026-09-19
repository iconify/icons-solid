import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8n9p-9ov.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="x8n9p-9ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:stampalt"} {...others} />);
}

export default Component;
