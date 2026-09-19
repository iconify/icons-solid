import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fe9lu6e9u.css';
import '../../css/k/katd21ghy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcSnQAbTc"><g class="aql7dnt-u"><path class="fe9lu6e9u"/><path class="katd21ghy"/></g></mask></defs><path mask="url(#SVGcSnQAbTc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:minus-the-bottom"} {...others} />);
}

export default Component;
