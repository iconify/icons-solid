import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jykbmnblb.css';
import '../../css/k/kpcu7cc2h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jykbmnblb"/><path clip-rule="evenodd" class="kpcu7cc2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:json"} {...others} />);
}

export default Component;
