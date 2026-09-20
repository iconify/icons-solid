import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1rj2f-ca.css';
import '../../css/i/is0ekwwap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k1rj2f-ca"/><path class="is0ekwwap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:map-point2-duotone"} {...others} />);
}

export default Component;
