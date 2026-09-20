import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxc4urb0d.css';
import '../../css/g/gks8du_si.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxc4urb0d"/><path class="gks8du_si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:check-box"} {...others} />);
}

export default Component;
