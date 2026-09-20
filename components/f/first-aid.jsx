import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv2m5ub-n.css';
import '../../css/j/jmyubu8dm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hv2m5ub-n"/><path class="jmyubu8dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:first-aid"} {...others} />);
}

export default Component;
