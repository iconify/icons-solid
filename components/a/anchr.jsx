import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6gn4b3ev.css';
import '../../css/q/qbrse918c.css';
import '../../css/p/pr7mw8ssc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="t6gn4b3ev"/><path class="qbrse918c"/><path class="pr7mw8ssc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anchr"} {...others} />);
}

export default Component;
