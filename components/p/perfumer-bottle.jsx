import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_r9nla7w.css';
import '../../css/z/zyy02mypp.css';
import '../../css/d/dh_jh14ui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6oQNTc1Z"><g class="aql7dnt-u"><rect class="u_r9nla7w"/><path class="zyy02mypp"/><path class="dh_jh14ui"/></g></mask></defs><path mask="url(#SVG6oQNTc1Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:perfumer-bottle"} {...others} />);
}

export default Component;
