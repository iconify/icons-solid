import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqi5z1bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lqi5z1bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-oceania-filled"} {...others} />);
}

export default Component;
