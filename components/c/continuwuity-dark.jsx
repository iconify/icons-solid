import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxxivlghf.css';
import '../../css/s/s4f0-m1sd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxxivlghf"/><path class="s4f0-m1sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:continuwuity-dark"} {...others} />);
}

export default Component;
