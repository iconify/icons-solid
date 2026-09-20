import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7e9-ibfi.css';
import '../../css/k/ksyanacfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7e9-ibfi"/><path clip-rule="evenodd" class="ksyanacfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:phone-duotone"} {...others} />);
}

export default Component;
