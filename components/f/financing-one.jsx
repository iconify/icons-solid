import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/ne-y4bcan.css';
import '../../css/v/vnrhmrbcz.css';
import '../../css/c/c4w93dekp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGF704Bdhr"><g class="ufeehvblu"><path class="ne-y4bcan"/><path class="vnrhmrbcz"/><path clip-rule="evenodd" class="c4w93dekp"/></g></mask></defs><path mask="url(#SVGF704Bdhr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:financing-one"} {...others} />);
}

export default Component;
