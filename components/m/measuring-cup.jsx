import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/ykho7dqzc.css';
import '../../css/a/a7_weletz.css';
import '../../css/r/rtf887bbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG66kxie0d"><g class="aql7dnt-u"><path class="ykho7dqzc"/><path class="a7_weletz"/><path class="rtf887bbu"/></g></mask></defs><path mask="url(#SVG66kxie0d)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:measuring-cup"} {...others} />);
}

export default Component;
