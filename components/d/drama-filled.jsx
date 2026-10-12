import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kax5-cj7n.css';
import '../../css/h/hyllzobun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kax5-cj7n"/><path clip-rule="evenodd" class="hyllzobun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:drama-filled"} {...others} />);
}

export default Component;
