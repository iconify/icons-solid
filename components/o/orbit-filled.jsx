import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gplnk4bil.css';
import '../../css/k/k_txi0raq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gplnk4bil"/><path class="k_txi0raq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:orbit-filled"} {...others} />);
}

export default Component;
