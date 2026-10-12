import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxur79b5t.css';
import '../../css/y/y95_zrbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxur79b5t"/><path class="y95_zrbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sparkles-filled"} {...others} />);
}

export default Component;
