import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw9wxrrim.css';
import '../../css/j/jlz7a01mh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fw9wxrrim"/><path class="jlz7a01mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sleuthspy"} {...others} />);
}

export default Component;
