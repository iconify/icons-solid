import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0oa6dbzl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a0oa6dbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:git-pull-request-create"} {...others} />);
}

export default Component;
