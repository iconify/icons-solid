import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/twlvgibdw.css';
import '../../css/e/eyclxt8ne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="twlvgibdw"/><path class="eyclxt8ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:hand-hexagon"} {...others} />);
}

export default Component;
