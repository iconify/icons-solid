import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwh1q-fzk.css';
import '../../css/o/okro7rlip.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gwh1q-fzk"/><path class="okro7rlip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-fuel-20"} {...others} />);
}

export default Component;
