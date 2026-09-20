import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g6dth7vnu.css';
import '../../css/n/n6xcip3fo.css';
import '../../css/s/s-xk2tf2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="g6dth7vnu"/><path class="n6xcip3fo"/><path class="s-xk2tf2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:medical-ribbon-1"} {...others} />);
}

export default Component;
