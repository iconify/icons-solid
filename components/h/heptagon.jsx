import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4jfl0xgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4jfl0xgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:heptagon"} {...others} />);
}

export default Component;
