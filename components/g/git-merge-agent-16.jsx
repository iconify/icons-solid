import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyuip7b1u.css';
import '../../css/d/d4yg8obpv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hyuip7b1u"/><path class="d4yg8obpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-merge-agent-16"} {...others} />);
}

export default Component;
