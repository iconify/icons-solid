import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1hzv5bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1hzv5bvp primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grip-horizontal-duotone"} {...others} />);
}

export default Component;
