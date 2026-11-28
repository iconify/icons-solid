import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjfo7acdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjfo7acdd primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-network-duotone"} {...others} />);
}

export default Component;
