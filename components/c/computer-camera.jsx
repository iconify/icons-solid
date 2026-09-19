import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h76a9ql5h.css';
import '../../css/i/i5o3gv_dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer h76a9ql5h"/><path class="duoicon-secondary-layer i5o3gv_dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:computer-camera"} {...others} />);
}

export default Component;
