import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lhob5rbnu.css';
import '../../css/u/uiygcpbmv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPZeTfe3m"><g class="ufeehvblu"><path class="lhob5rbnu"/><path class="uiygcpbmv"/></g></mask></defs><path mask="url(#SVGPZeTfe3m)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:inclusive-gateway"} {...others} />);
}

export default Component;
