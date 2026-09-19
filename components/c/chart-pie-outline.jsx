import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kel2ck8xd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kel2ck8xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:chart-pie-outline"} {...others} />);
}

export default Component;
