import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edd2ocbnm.css';
import '../../css/s/skhyrda9q.css';
import '../../css/m/m288z5bff.css';
import '../../css/n/n891pacwj.css';
import '../../css/f/f5gc7y0qh.css';
import '../../css/s/sch6mw2he.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edd2ocbnm"/><path class="skhyrda9q"/><path class="m288z5bff"/><path class="n891pacwj"/><path class="f5gc7y0qh"/><path class="sch6mw2he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-bold-duotone"} {...others} />);
}

export default Component;
