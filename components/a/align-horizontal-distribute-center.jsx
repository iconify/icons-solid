import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gcq9gub5a.css';
import '../../css/i/ioh4epz1v.css';
import '../../css/x/xtfewnb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="gcq9gub5a"/><rect class="ioh4epz1v"/><path class="xtfewnb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-horizontal-distribute-center"} {...others} />);
}

export default Component;
