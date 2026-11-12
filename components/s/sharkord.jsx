import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l74bii63v.css';
import '../../css/i/ipbgiccho.css';
import '../../css/i/ik5__lhjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l74bii63v"/><path class="ipbgiccho"/><path class="ik5__lhjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord"} {...others} />);
}

export default Component;
