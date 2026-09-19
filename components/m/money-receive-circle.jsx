import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/caqnx5y4d.css';
import '../../css/t/t5efulchj.css';
import '../../css/r/rh5gwkc7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="caqnx5y4d"/><path class="t5efulchj"/><path class="rh5gwkc7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-circle"} {...others} />);
}

export default Component;
