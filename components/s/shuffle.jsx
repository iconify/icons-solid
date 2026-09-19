import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dopxjy2hi.css';
import '../../css/r/rs80463iz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dopxjy2hi"/><path class="rs80463iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shuffle"} {...others} />);
}

export default Component;
