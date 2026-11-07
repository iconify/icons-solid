import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkagcqbna.css';
import '../../css/v/ve2i1gbcg.css';
import '../../css/y/ydksjga1d.css';
import '../../css/s/sxwqent6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkagcqbna"/><path clip-rule="evenodd" class="ve2i1gbcg"/><path class="ydksjga1d"/><path class="sxwqent6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-bold-duotone"} {...others} />);
}

export default Component;
