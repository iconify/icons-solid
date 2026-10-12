import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfc93ebce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kfc93ebce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:navigation-2-filled"} {...others} />);
}

export default Component;
