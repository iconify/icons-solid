import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l2h99cbcg.css';
import '../../css/x/xmie1ejsr.css';
import '../../css/k/k-k8-gbsm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGynakgbDH"><g class="ufeehvblu"><path class="l2h99cbcg"/><path class="xmie1ejsr"/><path class="k-k8-gbsm"/></g></mask></defs><path mask="url(#SVGynakgbDH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:expand-down"} {...others} />);
}

export default Component;
