import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u96dugbci.css';
import '../../css/j/j-o7--b0o.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="u96dugbci"/><path class="j-o7--b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:battery-dead"} {...others} />);
}

export default Component;
