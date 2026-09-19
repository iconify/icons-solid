import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpam7qbjh.css';
import '../../css/h/h0x9monpf.css';
import '../../css/w/wbip20b7n.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="gpam7qbjh"/><path class="h0x9monpf"/><path class="wbip20b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:id-card-outline"} {...others} />);
}

export default Component;
