import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcf2c5nxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcf2c5nxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-navbar-filled"} {...others} />);
}

export default Component;
