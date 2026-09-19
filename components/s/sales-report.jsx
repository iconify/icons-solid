import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cp-yxsb5p.css';
import '../../css/x/xgzhx-b0o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfvIi6d5U"><g class="v3_i3wktz"><path class="cp-yxsb5p"/><path class="xgzhx-b0o"/></g></mask></defs><path mask="url(#SVGfvIi6d5U)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sales-report"} {...others} />);
}

export default Component;
