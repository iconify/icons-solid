import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgakgacod.css';
import '../../css/s/s0oh6wb6v.css';
import '../../css/m/mfmbc9s1v.css';

const viewBox = {"width":25.9,"height":16.8};
const content = `<path class="cgakgacod"/><path class="s0oh6wb6v"/><path class="mfmbc9s1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:currency"} {...others} />);
}

export default Component;
