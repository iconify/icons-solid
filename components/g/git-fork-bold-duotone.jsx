import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu9ib-r1l.css';
import '../../css/k/k6cuctbpi.css';
import '../../css/f/fhryxrb5j.css';
import '../../css/w/wpjik2bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gu9ib-r1l"/><path clip-rule="evenodd" class="k6cuctbpi"/><path clip-rule="evenodd" class="fhryxrb5j"/><path clip-rule="evenodd" class="wpjik2bgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-fork-bold-duotone"} {...others} />);
}

export default Component;
