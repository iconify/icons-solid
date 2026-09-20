import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qy7kjeb-n.css';
import '../../css/s/soqhypbcv.css';
import '../../css/d/dzcxgfb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qy7kjeb-n"/><path class="soqhypbcv"/><path class="dzcxgfb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-square-navigation-alternate"} {...others} />);
}

export default Component;
