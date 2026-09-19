import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qkde5pb7p.css';
import '../../css/t/tp569z48v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxNQXrd5K"><g class="aql7dnt-u"><path class="qkde5pb7p"/><path class="tp569z48v"/></g></mask></defs><path mask="url(#SVGxNQXrd5K)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iron"} {...others} />);
}

export default Component;
