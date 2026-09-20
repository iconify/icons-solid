import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytr_51bee.css';

const viewBox = {"width":12,"height":16};
const content = `<path class="ytr_51bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request"} {...others} />);
}

export default Component;
