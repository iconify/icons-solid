import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_l042kxu.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="e_l042kxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:qr-code"} {...others} />);
}

export default Component;
