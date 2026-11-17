import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8ce4b4q.css';
import '../../css/t/t31j6x04d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba8ce4b4q"/><path class="t31j6x04d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-up-enter-filled"} {...others} />);
}

export default Component;
