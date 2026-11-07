import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay5dbdcag.css';
import '../../css/e/emvqbbbmt.css';
import '../../css/k/kg0jzztbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay5dbdcag"/><path clip-rule="evenodd" class="emvqbbbmt"/><path class="kg0jzztbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stretching-round-bold-duotone"} {...others} />);
}

export default Component;
