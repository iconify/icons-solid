import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk1fx-k4e.css';
import '../../css/n/nfdtw2x4x.css';
import '../../css/b/bcm2eibfs.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="nfdtw2x4x"/><path class="bcm2eibfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-semicircles"} {...others} />);
}

export default Component;
