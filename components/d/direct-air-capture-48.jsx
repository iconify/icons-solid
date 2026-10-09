import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n51f5-rcf.css';
import '../../css/z/z947jubke.css';
import '../../css/x/x69n_hb6j.css';
import '../../css/k/k06hl6der.css';
import '../../css/p/p2jrd4xsv.css';
import '../../css/p/pr9ofgl0i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n51f5-rcf"/><path class="z947jubke"/><path class="x69n_hb6j"/><path class="k06hl6der"/><path class="p2jrd4xsv"/><path class="pr9ofgl0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:direct-air-capture-48"} {...others} />);
}

export default Component;
