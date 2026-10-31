import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl26vvbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl26vvbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-gloss"} {...others} />);
}

export default Component;
