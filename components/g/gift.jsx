import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/euv8ulcjs.css';
import '../../css/x/x8o31lbdb.css';
import '../../css/l/lr5t2sbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="euv8ulcjs"/><path class="x8o31lbdb"/><path class="lr5t2sbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gift"} {...others} />);
}

export default Component;
