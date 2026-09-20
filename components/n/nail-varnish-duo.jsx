import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/n/n33_j5bls.css';
import '../../css/s/sdgbmebbp.css';
import '../../css/n/ndiqklb7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="n33_j5bls"/><path class="sdgbmebbp"/><path class="ndiqklb7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:nail-varnish-duo"} {...others} />);
}

export default Component;
