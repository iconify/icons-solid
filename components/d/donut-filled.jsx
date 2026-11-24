import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0ca_zb6s.css';
import '../../css/j/jp04aka3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0ca_zb6s"/><path clip-rule="evenodd" class="jp04aka3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:donut-filled"} {...others} />);
}

export default Component;
