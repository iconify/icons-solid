import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blx7dw47b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="blx7dw47b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:headphone-off-filled"} {...others} />);
}

export default Component;
