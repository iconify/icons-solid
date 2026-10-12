import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcygz2abe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcygz2abe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cannabis-off-filled"} {...others} />);
}

export default Component;
