import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiwt2mb2t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tiwt2mb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:git-branch-outline"} {...others} />);
}

export default Component;
