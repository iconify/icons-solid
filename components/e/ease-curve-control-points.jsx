import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh3dbhbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yh3dbhbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ease-curve-control-points"} {...others} />);
}

export default Component;
