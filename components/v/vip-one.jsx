import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qjpmzcbfz.css';
import '../../css/m/mr-c0lbac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGknHUcdGG"><g class="aql7dnt-u"><path class="qjpmzcbfz"/><path class="mr-c0lbac"/></g></mask></defs><path mask="url(#SVGknHUcdGG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vip-one"} {...others} />);
}

export default Component;
