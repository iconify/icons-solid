import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4pkyxbyo.css';
import '../../css/j/j34xgl0mc.css';
import '../../css/h/hti6_g1vm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="q4pkyxbyo"/><circle class="j34xgl0mc"/><circle class="hti6_g1vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight-dark"} {...others} />);
}

export default Component;
