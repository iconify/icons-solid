import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpslk2nqm.css';
import '../../css/m/m2lf_3ftl.css';
import '../../css/f/fwoy6hpte.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qpslk2nqm"/><path class="m2lf_3ftl"/><path id="SVGUAVZkcZA" class="fwoy6hpte"/><use width="100%" height="100%" href="#SVGUAVZkcZA" transform="matrix(-1 0 0 1 512 0)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bb-1x1"} {...others} />);
}

export default Component;
