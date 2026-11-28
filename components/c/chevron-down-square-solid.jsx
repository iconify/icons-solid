import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q734u6b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q734u6b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevron-down-square-solid"} {...others} />);
}

export default Component;
