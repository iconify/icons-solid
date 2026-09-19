import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh_3csxda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gh_3csxda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:git-pull-request-filled"} {...others} />);
}

export default Component;
