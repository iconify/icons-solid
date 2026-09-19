import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3fwb-27e.css';
import '../../css/o/owlnadbcb.css';
import '../../css/k/kbe_yhbuk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q3fwb-27e"/><rect class="owlnadbcb"/><path class="kbe_yhbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:library"} {...others} />);
}

export default Component;
