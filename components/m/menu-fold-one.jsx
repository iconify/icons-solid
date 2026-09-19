import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fawnadrdb.css';
import '../../css/e/e4inwoy3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsYu5BdCs"><g class="v3_i3wktz"><path class="fawnadrdb"/><path class="e4inwoy3s"/></g></mask></defs><path mask="url(#SVGsYu5BdCs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:menu-fold-one"} {...others} />);
}

export default Component;
