import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbl7r9mon.css';
import '../../css/z/zvcrm1bfj.css';
import '../../css/g/g5vtw-iho.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="kbl7r9mon"/><path class="zvcrm1bfj"/><path class="g5vtw-iho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:terminal-locked-24"} {...others} />);
}

export default Component;
