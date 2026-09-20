import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u74yizbkg.css';
import '../../css/q/qbep8abwr.css';
import '../../css/m/mholsabzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u74yizbkg"/><path class="qbep8abwr"/><path clip-rule="evenodd" class="mholsabzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera-duotone"} {...others} />);
}

export default Component;
