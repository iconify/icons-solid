import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zefx5bxey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zefx5bxey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alarm-light-off-outline"} {...others} />);
}

export default Component;
