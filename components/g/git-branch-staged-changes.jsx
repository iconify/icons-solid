import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggx28b43y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ggx28b43y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:git-branch-staged-changes"} {...others} />);
}

export default Component;
