import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs2b6lbrm.css';
import '../../css/m/mt4rt-ome.css';
import '../../css/w/wni3cxbdr.css';
import '../../css/f/fx4u2rb3w.css';
import '../../css/k/k-b4jw9sw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdQeOQboD"><g class="ft5dv1b6b"><path class="gs2b6lbrm"/><circle class="mt4rt-ome"/><circle class="wni3cxbdr"/><circle class="fx4u2rb3w"/><path class="k-b4jw9sw"/></g></mask></defs><path mask="url(#SVGdQeOQboD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:watermelon-one"} {...others} />);
}

export default Component;
