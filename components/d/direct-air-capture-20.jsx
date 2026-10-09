import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv2q0xfqj.css';
import '../../css/o/ory9una0m.css';
import '../../css/o/o9v6t__6i.css';
import '../../css/d/diqcidchs.css';
import '../../css/y/ywcq0jbtm.css';
import '../../css/z/zpa7l_bcn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nv2q0xfqj"/><path class="ory9una0m"/><path class="o9v6t__6i"/><path class="diqcidchs"/><path class="ywcq0jbtm"/><path class="zpa7l_bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:direct-air-capture-20"} {...others} />);
}

export default Component;
