import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro5b2tlle.css';
import '../../css/f/f-vbie9xr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro5b2tlle"/><path class="f-vbie9xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-refresh-clockwise"} {...others} />);
}

export default Component;
