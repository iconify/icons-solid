import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvtzd3b0t.css';
import '../../css/j/jxpdhoeop.css';
import '../../css/z/zk3b7wb-z.css';
import '../../css/p/p-c8nc-9e.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zvtzd3b0t"/><path class="jxpdhoeop"/><rect class="zk3b7wb-z"/><path class="p-c8nc-9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:today-outline"} {...others} />);
}

export default Component;
