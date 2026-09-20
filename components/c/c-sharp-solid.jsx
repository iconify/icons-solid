import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8p6y7blj.css';
import '../../css/m/ma5_rlb1n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f8p6y7blj"/><path clip-rule="evenodd" class="ma5_rlb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:c-sharp-solid"} {...others} />);
}

export default Component;
