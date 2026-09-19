import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pvaulcbxq.css';
import '../../css/s/s06x3zbcl.css';
import '../../css/k/kjp1-ju5t.css';
import '../../css/r/ryfhif1-v.css';
import '../../css/m/ml0eg630b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlfv2erqh"><g class="aql7dnt-u"><path class="pvaulcbxq"/><path class="s06x3zbcl"/><path class="kjp1-ju5t"/><path class="ryfhif1-v"/><path class="ml0eg630b"/></g></mask></defs><path mask="url(#SVGlfv2erqh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:newspaper-folding"} {...others} />);
}

export default Component;
