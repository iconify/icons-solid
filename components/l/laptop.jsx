import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1mn4yb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e1mn4yb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:laptop"} {...others} />);
}

export default Component;
