import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4r5-ok7c.css';
import '../../css/a/an49idj0x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n4r5-ok7c"/><path class="an49idj0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:log-out"} {...others} />);
}

export default Component;
