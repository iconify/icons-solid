import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_c0fnb5t.css';
import '../../css/x/xk9zeubkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_c0fnb5t"/><path class="xk9zeubkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:settings-outline"} {...others} />);
}

export default Component;
