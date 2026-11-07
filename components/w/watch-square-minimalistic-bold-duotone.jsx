import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n71meqx1z.css';
import '../../css/m/md4zfsbwr.css';
import '../../css/l/ly80_-bfn.css';
import '../../css/m/mwmwneokw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n71meqx1z"/><path class="md4zfsbwr"/><path class="ly80_-bfn"/><path class="mwmwneokw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
