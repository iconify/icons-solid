import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/a89p05mcb.css';
import '../../css/d/dsz9dwbht.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMzaSmcnT"><g class="v3_i3wktz"><path class="a89p05mcb"/><path class="dsz9dwbht"/></g></mask></defs><path mask="url(#SVGMzaSmcnT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:map-two"} {...others} />);
}

export default Component;
