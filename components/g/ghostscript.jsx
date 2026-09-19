import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_nmcjw-b.css';

const viewBox = {"width":410,"height":512};
const content = `<path class="t_nmcjw-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:ghostscript"} {...others} />);
}

export default Component;
