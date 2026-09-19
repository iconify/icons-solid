import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8pvc7bdh.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="h8pvc7bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:fire-flame-curved"} {...others} />);
}

export default Component;
