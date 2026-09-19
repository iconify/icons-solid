import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms3g9iieh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ms3g9iieh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:candy-cane"} {...others} />);
}

export default Component;
