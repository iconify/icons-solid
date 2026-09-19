import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yahvtwbpp.css';
import '../../css/w/w-bu9e3ii.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu2YsNdIu"><g class="v3_i3wktz"><rect class="yahvtwbpp"/><path class="w-bu9e3ii"/></g></mask></defs><path mask="url(#SVGu2YsNdIu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transaction-order"} {...others} />);
}

export default Component;
