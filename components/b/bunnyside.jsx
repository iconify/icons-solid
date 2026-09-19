import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxbiylbvh.css';
import '../../css/a/afnh3eg2a.css';
import '../../css/o/onw483rpz.css';
import '../../css/u/uj0djj1qw.css';
import '../../css/p/pgi2lcabh.css';
import '../../css/o/osn__dbws.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="uxbiylbvh"/><path class="afnh3eg2a"/><path class="onw483rpz"/><path class="uj0djj1qw"/><path class="pgi2lcabh"/><path class="osn__dbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bunnyside"} {...others} />);
}

export default Component;
