import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auv8y4bny.css';
import '../../css/m/mhso12ngf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="auv8y4bny"/><path class="mhso12ngf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-minus-filled"} {...others} />);
}

export default Component;
