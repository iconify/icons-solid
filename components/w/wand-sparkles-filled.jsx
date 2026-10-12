import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1-vf5x4j.css';
import '../../css/m/mzcm9qfhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d1-vf5x4j"/><path class="mzcm9qfhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wand-sparkles-filled"} {...others} />);
}

export default Component;
