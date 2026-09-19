import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f5758gbbz.css';
import '../../css/u/uowmflbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSes5ne2H"><g class="ufeehvblu"><path class="f5758gbbz"/><path class="uowmflbel"/></g></mask></defs><path mask="url(#SVGSes5ne2H)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:preview-open"} {...others} />);
}

export default Component;
