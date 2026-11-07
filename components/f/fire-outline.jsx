import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhgas6b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rhgas6b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-outline"} {...others} />);
}

export default Component;
