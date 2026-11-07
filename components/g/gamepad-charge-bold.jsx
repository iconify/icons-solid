import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udpk4tbla.css';
import '../../css/p/pob1i1ksy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udpk4tbla"/><path clip-rule="evenodd" class="pob1i1ksy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-charge-bold"} {...others} />);
}

export default Component;
