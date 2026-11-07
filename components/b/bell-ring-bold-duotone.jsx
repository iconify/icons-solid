import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8czseb2v.css';
import '../../css/u/uoo_ldb1e.css';
import '../../css/d/d-xw4ab1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8czseb2v"/><path class="uoo_ldb1e"/><path class="d-xw4ab1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-ring-bold-duotone"} {...others} />);
}

export default Component;
