import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjqdud4ra.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="vjqdud4ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:file-signature"} {...others} />);
}

export default Component;
