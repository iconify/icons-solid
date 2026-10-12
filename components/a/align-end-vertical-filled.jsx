import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfc-4abeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfc-4abeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-end-vertical-filled"} {...others} />);
}

export default Component;
