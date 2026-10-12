import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym02nvber.css';
import '../../css/u/unrc__8ri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ym02nvber"/><path clip-rule="evenodd" class="unrc__8ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:playing-card-filled"} {...others} />);
}

export default Component;
