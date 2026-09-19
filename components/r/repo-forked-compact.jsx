import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci5wxgb0r.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ci5wxgb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:repo-forked-compact"} {...others} />);
}

export default Component;
