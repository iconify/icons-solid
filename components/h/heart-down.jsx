import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy2w6dp5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uy2w6dp5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:heart-down"} {...others} />);
}

export default Component;
