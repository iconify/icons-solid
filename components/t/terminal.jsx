import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmy1g3b0n.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="kmy1g3b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:terminal"} {...others} />);
}

export default Component;
