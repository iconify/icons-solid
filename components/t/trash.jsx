import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfm5imxge.css';
import '../../css/u/u5ykzlbde.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rfm5imxge"/><path class="u5ykzlbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trash"} {...others} />);
}

export default Component;
