import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acfw_0h4o.css';
import '../../css/c/cvexhhoop.css';
import '../../css/c/cnmcd-dyc.css';
import '../../css/n/nndcce1xd.css';
import '../../css/m/ml3kooltr.css';
import '../../css/o/ozacqrbwb.css';
import '../../css/a/ab-2t2bjg.css';
import '../../css/m/maoilg2fu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="acfw_0h4o"/><path class="cvexhhoop"/><circle class="cnmcd-dyc"/><path class="nndcce1xd"/><path class="ml3kooltr"/><circle class="ozacqrbwb"/><path class="ab-2t2bjg"/><path class="maoilg2fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mouse-face"} {...others} />);
}

export default Component;
