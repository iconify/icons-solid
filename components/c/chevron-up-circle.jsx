import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l27dxibsi.css';
import '../../css/m/mpgu6g9gp.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="l27dxibsi"/><path clip-rule="evenodd" class="mpgu6g9gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chevron-up-circle"} {...others} />);
}

export default Component;
