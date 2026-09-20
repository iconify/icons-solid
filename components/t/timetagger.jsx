import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4xrj7b1v.css';
import '../../css/f/fxwu97ass.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i4xrj7b1v"/><path class="fxwu97ass"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timetagger"} {...others} />);
}

export default Component;
