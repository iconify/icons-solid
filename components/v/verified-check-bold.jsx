import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg3mb-7km.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kg3mb-7km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:verified-check-bold"} {...others} />);
}

export default Component;
