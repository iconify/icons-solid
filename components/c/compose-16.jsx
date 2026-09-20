import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k92ore-6n.css';
import '../../css/c/cr42b6bnq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k92ore-6n"/><path class="cr42b6bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:compose-16"} {...others} />);
}

export default Component;
