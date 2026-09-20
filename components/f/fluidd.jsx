import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf_1mybtb.css';
import '../../css/r/r2pseab2n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sf_1mybtb"/><path class="r2pseab2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fluidd"} {...others} />);
}

export default Component;
