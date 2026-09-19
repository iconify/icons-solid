import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eravc0ckn.css';
import '../../css/e/ezpmgmh6m.css';
import '../../css/g/gxdysm7hd.css';
import '../../css/q/qzhl0pzrn.css';
import '../../css/b/bpqc-te1x.css';
import '../../css/y/y01u_cc9i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eravc0ckn"/><path class="ezpmgmh6m"/><path class="gxdysm7hd"/><path class="qzhl0pzrn"/><path class="bpqc-te1x"/><path class="y01u_cc9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:military-medal"} {...others} />);
}

export default Component;
