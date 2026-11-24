import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbltlh2de.css';
import '../../css/f/f0xl0fb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qbltlh2de"/><path class="f0xl0fb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-off-filled"} {...others} />);
}

export default Component;
