import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u399v6e6v.css';
import '../../css/u/u93wto46y.css';
import '../../css/x/xxy0vkf3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 20.9 21.81)" class="u399v6e6v"/><path class="u93wto46y"/><path class="xxy0vkf3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cooking-pot"} {...others} />);
}

export default Component;
