import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qe2te7bxw.css';
import '../../css/b/beli9e-kr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuR0nwcKO"><g class="aql7dnt-u"><path class="qe2te7bxw"/><path class="beli9e-kr"/></g></mask></defs><path mask="url(#SVGuR0nwcKO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mirror"} {...others} />);
}

export default Component;
