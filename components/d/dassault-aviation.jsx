import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi0vm5zlg.css';
import '../../css/w/w5p8r3ckd.css';

const viewBox = {"width":1547,"height":2503};
const content = `<path class="pi0vm5zlg"/><path class="w5p8r3ckd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:dassault-aviation"} {...others} />);
}

export default Component;
