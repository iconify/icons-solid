import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imvi96b1n.css';
import '../../css/e/egk7vr19t.css';
import '../../css/v/v1g1o1cdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="imvi96b1n"/><path class="egk7vr19t"/><path class="v1g1o1cdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:water-bucket-outline"} {...others} />);
}

export default Component;
