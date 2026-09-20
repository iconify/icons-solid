import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fmq6b7a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e3fmq6b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:git-pull-outline"} {...others} />);
}

export default Component;
