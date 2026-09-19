import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojv9pubkm.css';
import '../../css/h/hur7hdsnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojv9pubkm"/><path class="hur7hdsnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pizza-alt-filled"} {...others} />);
}

export default Component;
