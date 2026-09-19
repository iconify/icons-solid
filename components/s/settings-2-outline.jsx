import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gheq95bra.css';
import '../../css/x/xk9zeubkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gheq95bra"/><path class="xk9zeubkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:settings-2-outline"} {...others} />);
}

export default Component;
