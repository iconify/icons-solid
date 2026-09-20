import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2h083b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n2h083b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-4-outline"} {...others} />);
}

export default Component;
