import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te1p4dbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="te1p4dbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:thumb-up-duotone"} {...others} />);
}

export default Component;
