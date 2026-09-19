import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nlz27rbmf.css';
import '../../css/m/mcnb5dgfv.css';
import '../../css/m/mkx12cc6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nlz27rbmf"/><path class="mcnb5dgfv"/><path clip-rule="evenodd" class="mkx12cc6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:anchor-two"} {...others} />);
}

export default Component;
