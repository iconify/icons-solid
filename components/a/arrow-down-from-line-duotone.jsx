import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klt794f4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="klt794f4c primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-from-line-duotone"} {...others} />);
}

export default Component;
