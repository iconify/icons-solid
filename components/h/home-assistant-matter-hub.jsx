import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpif0vp-i.css';
import '../../css/v/vd05wq3fm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jpif0vp-i"/><path class="vd05wq3fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:home-assistant-matter-hub"} {...others} />);
}

export default Component;
