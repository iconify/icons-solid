import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm0oa-gwa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qm0oa-gwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-commit-16"} {...others} />);
}

export default Component;
