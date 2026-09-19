import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vknzh77mq.css';
import '../../css/v/v8lrvwzjl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh0AjCdDV"><g class="aql7dnt-u"><path class="vknzh77mq"/><path class="v8lrvwzjl"/></g></mask></defs><path mask="url(#SVGh0AjCdDV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weixin-market"} {...others} />);
}

export default Component;
