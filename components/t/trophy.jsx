import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvtf0og5p.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="lvtf0og5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:trophy"} {...others} />);
}

export default Component;
