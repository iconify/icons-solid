import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arac5xnmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arac5xnmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ruler-dimension-line-filled"} {...others} />);
}

export default Component;
