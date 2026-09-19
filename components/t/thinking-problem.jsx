import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h6karfbzd.css';
import '../../css/r/rs6xfdeqy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGP2l5AdEm"><g class="aql7dnt-u"><path class="h6karfbzd"/><path class="rs6xfdeqy"/></g></mask></defs><path mask="url(#SVGP2l5AdEm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:thinking-problem"} {...others} />);
}

export default Component;
