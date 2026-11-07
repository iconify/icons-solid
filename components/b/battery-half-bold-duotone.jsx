import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eooclpefv.css';
import '../../css/l/l_ge0bc2p.css';
import '../../css/s/svsjp97bp.css';
import '../../css/b/bym404azn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eooclpefv"/><path class="l_ge0bc2p"/><path class="svsjp97bp"/><path class="bym404azn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-bold-duotone"} {...others} />);
}

export default Component;
