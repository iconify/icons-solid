import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqsvnfbdg.css';
import '../../css/e/e7dr5zbeu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh5aOocYS"><g class="v3_i3wktz"><rect class="fqsvnfbdg"/><path class="e7dr5zbeu"/></g></mask></defs><path mask="url(#SVGh5aOocYS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:electronic-locks-close"} {...others} />);
}

export default Component;
