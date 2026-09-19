import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ollll1rvu.css';
import '../../css/s/ssk_xhn8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ollll1rvu"/><path class="ssk_xhn8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:flower"} {...others} />);
}

export default Component;
