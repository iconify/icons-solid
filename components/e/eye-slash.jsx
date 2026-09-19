import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj43_vuli.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="qj43_vuli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:eye-slash"} {...others} />);
}

export default Component;
