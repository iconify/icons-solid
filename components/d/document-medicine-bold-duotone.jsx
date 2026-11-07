import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4w_uybke.css';
import '../../css/k/ktwithbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4w_uybke"/><path clip-rule="evenodd" class="ktwithbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-medicine-bold-duotone"} {...others} />);
}

export default Component;
