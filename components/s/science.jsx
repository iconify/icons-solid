import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3g5p9b8f.css';
import '../../css/x/xr22nd2nm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3g5p9b8f"/><path class="xr22nd2nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:science"} {...others} />);
}

export default Component;
