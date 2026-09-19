import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol18m9l3x.css';
import '../../css/r/rhyynac5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ol18m9l3x"/><path class="rhyynac5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-boat"} {...others} />);
}

export default Component;
