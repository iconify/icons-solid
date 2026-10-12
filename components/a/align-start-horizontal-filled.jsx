import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5bbkob2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5bbkob2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-start-horizontal-filled"} {...others} />);
}

export default Component;
