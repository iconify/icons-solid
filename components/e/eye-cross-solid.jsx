import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofquuccxv.css';
import '../../css/o/ozejtjb0s.css';
import '../../css/r/rz_gxrlbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofquuccxv"/><path class="ozejtjb0s"/><path class="rz_gxrlbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:eye-cross-solid"} {...others} />);
}

export default Component;
