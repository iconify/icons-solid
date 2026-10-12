import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th4v1wbjr.css';
import '../../css/q/qydmu93ss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="th4v1wbjr"/><path class="qydmu93ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:graduation-cap-filled"} {...others} />);
}

export default Component;
