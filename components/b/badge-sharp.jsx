import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxv8z0-zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxv8z0-zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-sharp"} {...others} />);
}

export default Component;
