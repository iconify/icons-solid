import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si-zo371a.css';
import '../../css/r/rpw047bth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="si-zo371a"/><path class="rpw047bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:link-alt"} {...others} />);
}

export default Component;
