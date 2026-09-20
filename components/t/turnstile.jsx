import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhplffbdf.css';
import '../../css/z/zv-6rgbbp.css';
import '../../css/p/pfmh85w5h.css';
import '../../css/s/sxrpgcc4c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zhplffbdf"/><path class="zv-6rgbbp"/><path class="pfmh85w5h"/><path class="sxrpgcc4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:turnstile"} {...others} />);
}

export default Component;
