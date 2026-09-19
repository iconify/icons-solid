import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii7a4u0gn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ii7a4u0gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:hyper"} {...others} />);
}

export default Component;
