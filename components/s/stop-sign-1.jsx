import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy_v726cn.css';
import '../../css/v/vz494t6ef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy_v726cn"/><path class="vz494t6ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:stop-sign-1"} {...others} />);
}

export default Component;
