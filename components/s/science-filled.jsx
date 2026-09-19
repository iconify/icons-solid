import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knw-0m56b.css';
import '../../css/x/xr22nd2nm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knw-0m56b"/><path class="xr22nd2nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:science-filled"} {...others} />);
}

export default Component;
