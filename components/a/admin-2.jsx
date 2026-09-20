import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9l7qmfov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9l7qmfov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:admin-2"} {...others} />);
}

export default Component;
