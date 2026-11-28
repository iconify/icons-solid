import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omjlb3bip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omjlb3bip primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:git-branch-check-duotone"} {...others} />);
}

export default Component;
