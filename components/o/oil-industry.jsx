import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cuqsycbyu.css';
import '../../css/d/dq04duqxa.css';
import '../../css/j/jd1_0hjpd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPoia1ctQ"><g class="v3_i3wktz"><path class="cuqsycbyu"/><path class="dq04duqxa"/><path class="jd1_0hjpd"/></g></mask></defs><path mask="url(#SVGPoia1ctQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:oil-industry"} {...others} />);
}

export default Component;
