import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vpqs4v0fe.css';
import '../../css/g/gn-k8rb_d.css';
import '../../css/n/nu33h_bty.css';
import '../../css/c/cm-ruxshm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="vpqs4v0fe"/><path class="gn-k8rb_d"/><path class="nu33h_bty"/><path class="cm-ruxshm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:etc"} {...others} />);
}

export default Component;
