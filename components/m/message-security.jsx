import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z7dq4587f.css';
import '../../css/b/bwow5seie.css';
import '../../css/v/vn_agwb7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiLzEkdTl"><g class="aql7dnt-u"><path class="z7dq4587f"/><path class="bwow5seie"/><path class="vn_agwb7j"/></g></mask></defs><path mask="url(#SVGiLzEkdTl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message-security"} {...others} />);
}

export default Component;
