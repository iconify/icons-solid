import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaz8g2msr.css';
import '../../css/y/yrdtwjb0t.css';
import '../../css/y/yi-g9l8ek.css';
import '../../css/y/ymhcny24d.css';
import '../../css/s/spa50jnxs.css';
import '../../css/x/xvc8zkb9k.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jaz8g2msr"/><path class="yrdtwjb0t"/><path class="yi-g9l8ek"/><path class="ymhcny24d"/><path class="spa50jnxs"/><path class="xvc8zkb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:romm"} {...others} />);
}

export default Component;
