import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug-3ocbdk.css';
import '../../css/u/u1i46jede.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjiUYGbug"><g class="aql7dnt-u"><path class="ug-3ocbdk"/><path class="u1i46jede"/></g></mask></defs><path mask="url(#SVGjiUYGbug)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bytedance-mini-app"} {...others} />);
}

export default Component;
