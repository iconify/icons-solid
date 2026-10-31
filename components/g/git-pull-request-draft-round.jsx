import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1uee2bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1uee2bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-pull-request-draft-round"} {...others} />);
}

export default Component;
