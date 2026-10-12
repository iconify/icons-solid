import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6c6j0kyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6c6j0kyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scale-3d-filled"} {...others} />);
}

export default Component;
