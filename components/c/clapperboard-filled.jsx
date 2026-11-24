import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h43-oobqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h43-oobqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clapperboard-filled"} {...others} />);
}

export default Component;
