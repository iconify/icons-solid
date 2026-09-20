import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldv-rwb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldv-rwb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-cloud-fill"} {...others} />);
}

export default Component;
