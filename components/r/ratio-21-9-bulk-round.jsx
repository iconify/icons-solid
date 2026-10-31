import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cibfdeb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cibfdeb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-21-9-bulk-round"} {...others} />);
}

export default Component;
