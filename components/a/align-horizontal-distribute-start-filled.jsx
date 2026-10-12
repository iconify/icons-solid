import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foz5q4n-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="foz5q4n-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-horizontal-distribute-start-filled"} {...others} />);
}

export default Component;
