import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sjxycbjzr.css';
import '../../css/x/xdjtwgb7o.css';
import '../../css/j/jbtaph4oz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlkr5ieYj"><g class="s9cl3zbei"><path class="sjxycbjzr"/><path class="xdjtwgb7o"/><path class="jbtaph4oz"/></g></mask></defs><path mask="url(#SVGlkr5ieYj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:icecream-five"} {...others} />);
}

export default Component;
