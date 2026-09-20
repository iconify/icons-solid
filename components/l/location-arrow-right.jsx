import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mik8_3b7p.css';

const viewBox = {"width":25,"height":25};
const content = `<path clip-rule="evenodd" class="mik8_3b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:location-arrow-right"} {...others} />);
}

export default Component;
