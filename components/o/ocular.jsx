import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2nhvg7mm.css';
import '../../css/n/ny4n5ccbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j2nhvg7mm"/><path class="ny4n5ccbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ocular"} {...others} />);
}

export default Component;
