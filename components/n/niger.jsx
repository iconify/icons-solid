import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ephwb-o.css';
import '../../css/t/t_ciu4b3h.css';
import '../../css/g/gbjdtbbzz.css';
import '../../css/b/ba1owlbyh.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="x7ephwb-o"/><path class="t_ciu4b3h"/><path class="gbjdtbbzz"/><path class="ba1owlbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:niger"} {...others} />);
}

export default Component;
