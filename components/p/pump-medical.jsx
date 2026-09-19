import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuaqtw_ay.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="cuaqtw_ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:pump-medical"} {...others} />);
}

export default Component;
