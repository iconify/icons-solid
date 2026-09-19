import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/l/lbjs96bea.css';
import '../../css/d/dm_j5gglv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMjWPne7J"><g class="cgga7abld"><path class="lbjs96bea"/><path class="dm_j5gglv"/></g></mask></defs><path mask="url(#SVGMjWPne7J)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weightlifting"} {...others} />);
}

export default Component;
