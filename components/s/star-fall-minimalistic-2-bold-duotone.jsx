import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqmz4sbco.css';
import '../../css/a/aaopfcb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqmz4sbco"/><path clip-rule="evenodd" class="aaopfcb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
