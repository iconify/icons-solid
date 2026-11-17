import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef80_t4pp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ef80_t4pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:stroke-line-cap-butt-filled"} {...others} />);
}

export default Component;
