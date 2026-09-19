import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8n_19bkx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8n_19bkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:location-sharp"} {...others} />);
}

export default Component;
