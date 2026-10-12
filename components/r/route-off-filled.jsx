import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_r-5l9bw.css';
import '../../css/t/t9h25ryne.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b_r-5l9bw"/><path class="t9h25ryne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:route-off-filled"} {...others} />);
}

export default Component;
