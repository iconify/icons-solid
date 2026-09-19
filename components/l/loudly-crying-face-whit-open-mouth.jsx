import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/e/eh2-i3ale.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8xPXIdjS"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="eh2-i3ale"/></g></mask></defs><path mask="url(#SVG8xPXIdjS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:loudly-crying-face-whit-open-mouth"} {...others} />);
}

export default Component;
