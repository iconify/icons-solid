import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-o21k_6n.css';
import '../../css/j/j3j2k6b7d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s-o21k_6n"/><path class="j3j2k6b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cable"} {...others} />);
}

export default Component;
