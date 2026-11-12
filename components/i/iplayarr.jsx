import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppubembly.css';
import '../../css/n/nlg65ubth.css';
import '../../css/d/dup3v4bcs.css';
import '../../css/v/vjapwvb6n.css';
import '../../css/j/j2p8_jaiw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ppubembly"/><path class="nlg65ubth"/><path class="dup3v4bcs"/><path class="vjapwvb6n"/><path class="j2p8_jaiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iplayarr"} {...others} />);
}

export default Component;
