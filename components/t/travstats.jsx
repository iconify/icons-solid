import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob9sxvbzl.css';
import '../../css/w/wnxfwsbhv.css';
import '../../css/y/y87stwskn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ob9sxvbzl"/><path class="wnxfwsbhv"/><path class="y87stwskn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:travstats"} {...others} />);
}

export default Component;
