import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luof2w8us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="luof2w8us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:git-merge-solid"} {...others} />);
}

export default Component;
