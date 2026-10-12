import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tugoukqgy.css';
import '../../css/s/sc-v4kmjp.css';
import '../../css/k/kqvg6317g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tugoukqgy"/><path clip-rule="evenodd" class="sc-v4kmjp"/><path class="kqvg6317g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-notes-filled"} {...others} />);
}

export default Component;
