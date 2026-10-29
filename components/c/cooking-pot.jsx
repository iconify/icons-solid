import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cc17gdc.css';
import '../../css/q/q9hgeib1y.css';
import '../../css/d/dduq9elsr.css';
import '../../css/r/ryldpth7k.css';
import '../../css/p/poagl1bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6cc17gdc wm-k"/><path class="q9hgeib1y wm-a"/><path class="dduq9elsr wm-k"/><path class="ryldpth7k wm-k"/><path class="poagl1bqj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cooking-pot"} {...others} />);
}

export default Component;
