import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4n9_hbzl.css';
import '../../css/v/v1j9wac_l.css';
import '../../css/v/vbzy9bb5g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q4n9_hbzl"/><path class="v1j9wac_l"/><path class="vbzy9bb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:status-acknowledge"} {...others} />);
}

export default Component;
