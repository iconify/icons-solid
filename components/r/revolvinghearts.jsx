import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aob6fmi_e.css';
import '../../css/n/n71_44j2k.css';
import '../../css/w/w9orhbbyr.css';
import '../../css/q/qiefsmlyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aob6fmi_e"/><path class="n71_44j2k"/><path class="w9orhbbyr"/><path class="qiefsmlyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:revolvinghearts"} {...others} />);
}

export default Component;
