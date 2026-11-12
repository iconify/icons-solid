import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ledtbof.css';
import '../../css/v/vtrz5wtxj.css';
import '../../css/m/mx9-r4b3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5ledtbof"/><path class="vtrz5wtxj"/><path class="mx9-r4b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:leafwiki-dark"} {...others} />);
}

export default Component;
