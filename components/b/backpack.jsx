import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq_y6cb7x.css';

const viewBox = {"width":432,"height":512};
const content = `<path class="iq_y6cb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:backpack"} {...others} />);
}

export default Component;
