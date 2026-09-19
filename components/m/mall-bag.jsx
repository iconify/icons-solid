import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jm8jfs5cr.css';
import '../../css/d/de8dzpspb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmGuvjbTO"><g class="v3_i3wktz"><path class="jm8jfs5cr"/><path class="de8dzpspb"/></g></mask></defs><path mask="url(#SVGmGuvjbTO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mall-bag"} {...others} />);
}

export default Component;
