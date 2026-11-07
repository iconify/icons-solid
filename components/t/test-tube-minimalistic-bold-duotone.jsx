import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6iy-gb8w.css';
import '../../css/u/uif7prbix.css';
import '../../css/w/w3j8bvi0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6iy-gb8w"/><path class="uif7prbix"/><path class="w3j8bvi0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
