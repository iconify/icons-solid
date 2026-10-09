import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx0wpfbrz.css';
import '../../css/y/yc_qcr2ri.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gx0wpfbrz"/><path class="yc_qcr2ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-20-bold"} {...others} />);
}

export default Component;
