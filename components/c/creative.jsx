import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xdw2bdcxa.css';
import '../../css/t/tjohlwgfv.css';
import '../../css/u/uutusgtyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaa06Tchr"><g class="ufeehvblu"><path class="xdw2bdcxa"/><path class="tjohlwgfv"/><path class="uutusgtyk"/></g></mask></defs><path mask="url(#SVGaa06Tchr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:creative"} {...others} />);
}

export default Component;
