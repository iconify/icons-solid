import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qe0g46bxg.css';
import '../../css/e/euxi43hbo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWVRuoepI"><g class="v3_i3wktz"><path class="qe0g46bxg"/><path class="euxi43hbo"/></g></mask></defs><path mask="url(#SVGWVRuoepI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-call"} {...others} />);
}

export default Component;
