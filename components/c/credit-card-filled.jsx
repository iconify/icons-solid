import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzub7q6ne.css';
import '../../css/j/jtfx71bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lzub7q6ne"/><path class="jtfx71bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-filled"} {...others} />);
}

export default Component;
