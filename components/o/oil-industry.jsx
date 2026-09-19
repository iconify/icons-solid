import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/k_4pnabxr.css';
import '../../css/q/q28hijmyi.css';
import '../../css/e/ejn_mibun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNAHyWfxo"><g class="ufeehvblu"><path class="k_4pnabxr"/><path class="q28hijmyi"/><path class="ejn_mibun"/></g></mask></defs><path mask="url(#SVGNAHyWfxo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:oil-industry"} {...others} />);
}

export default Component;
