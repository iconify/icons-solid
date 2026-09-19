import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6mbt6uzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6mbt6uzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ease-curve-control-points"} {...others} />);
}

export default Component;
