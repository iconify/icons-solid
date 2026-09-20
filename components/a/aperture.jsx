import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqxh4ky4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqxh4ky4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:aperture"} {...others} />);
}

export default Component;
