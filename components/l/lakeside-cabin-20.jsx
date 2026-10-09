import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k77fnfbma.css';
import '../../css/g/ggp2rgbib.css';
import '../../css/r/rlvpsdb0c.css';
import '../../css/l/lg4s_3gdi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k77fnfbma"/><path class="ggp2rgbib"/><path class="rlvpsdb0c"/><path class="lg4s_3gdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lakeside-cabin-20"} {...others} />);
}

export default Component;
