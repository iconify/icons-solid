import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ito3gy.css';
import '../../css/i/iw1iew.css';
import '../../css/m/mz7t6h.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-stq6uv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ito3gy iw1iew"/><path class="iw1iew mz7t6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:round-360"} {...others} />);
}

export default Component;
