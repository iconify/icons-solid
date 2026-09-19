import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krdoyobux.css';
import '../../css/g/glhekuvna.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="krdoyobux"/><path class="glhekuvna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysblackuppointingindex"} {...others} />);
}

export default Component;
