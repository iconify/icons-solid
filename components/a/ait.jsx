import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-yalvqiy.css';
import '../../css/k/kj3mfibmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-yalvqiy"/><path class="kj3mfibmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ait"} {...others} />);
}

export default Component;
