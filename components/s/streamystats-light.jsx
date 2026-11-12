import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i86vmwb3r.css';
import '../../css/c/cogmg3blm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i86vmwb3r"/><path class="cogmg3blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats-light"} {...others} />);
}

export default Component;
