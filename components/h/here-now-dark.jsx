import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdtt5t4xh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pdtt5t4xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:here-now-dark"} {...others} />);
}

export default Component;
