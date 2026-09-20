import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsay_9bjz.css';
import '../../css/e/e56ncghit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xsay_9bjz"/><path class="e56ncghit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request-locked-16"} {...others} />);
}

export default Component;
