import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlo-1-b1r.css';
import '../../css/h/hgxu9lb6k.css';
import '../../css/r/rt3rcig7i.css';
import '../../css/w/wi0dpbc4a.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tlo-1-b1r"/><path class="hgxu9lb6k"/><path class="rt3rcig7i"/><path class="wi0dpbc4a"/><path class="ikpbwe38b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-alert-48"} {...others} />);
}

export default Component;
