import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irm1bq5fz.css';
import '../../css/w/w9u355bkz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="irm1bq5fz"/><path class="w9u355bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:globe"} {...others} />);
}

export default Component;
