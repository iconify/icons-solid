import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxigcqtgr.css';
import '../../css/r/r2mnmqlht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxigcqtgr"/><path class="r2mnmqlht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:store-filled"} {...others} />);
}

export default Component;
