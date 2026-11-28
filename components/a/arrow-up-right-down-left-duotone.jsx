import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvl7cvegy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvl7cvegy primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-right-down-left-duotone"} {...others} />);
}

export default Component;
