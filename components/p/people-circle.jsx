import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-jv-mbrm.css';
import '../../css/t/t5-bpgztj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b-jv-mbrm"/><path class="t5-bpgztj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:people-circle"} {...others} />);
}

export default Component;
