import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7yw8yb6r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k7yw8yb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:assembly-zilog"} {...others} />);
}

export default Component;
