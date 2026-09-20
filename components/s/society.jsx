import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guc56fbsq.css';
import '../../css/b/bqc81ux0g.css';
import '../../css/a/amspxabxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="guc56fbsq"/><path class="bqc81ux0g"/><path class="amspxabxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:society"} {...others} />);
}

export default Component;
