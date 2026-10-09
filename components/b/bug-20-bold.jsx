import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcy6jh_of.css';
import '../../css/r/rx-p80tpn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lcy6jh_of"/><path class="rx-p80tpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bug-20-bold"} {...others} />);
}

export default Component;
