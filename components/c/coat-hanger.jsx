import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sz9e8238f.css';
import '../../css/k/kxnbaldms.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoDnRsbqV"><g class="aql7dnt-u"><path class="sz9e8238f"/><path class="kxnbaldms"/></g></mask></defs><path mask="url(#SVGoDnRsbqV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:coat-hanger"} {...others} />);
}

export default Component;
