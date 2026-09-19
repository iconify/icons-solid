import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hnkmrzboi.css';
import '../../css/t/t53-tru5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr9eI3clC"><g class="aql7dnt-u"><path class="hnkmrzboi"/><path class="t53-tru5y"/></g></mask></defs><path mask="url(#SVGr9eI3clC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weixin-shake"} {...others} />);
}

export default Component;
