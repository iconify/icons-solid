import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke4nxkbkt.css';
import '../../css/s/sfqi7kbmf.css';
import '../../css/t/tzc2xabqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke4nxkbkt"/><path clip-rule="evenodd" class="sfqi7kbmf"/><path clip-rule="evenodd" class="tzc2xabqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-bold-duotone"} {...others} />);
}

export default Component;
