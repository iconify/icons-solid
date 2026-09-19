import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/azokiuq7x.css';
import '../../css/q/q3jhrhbxa.css';
import '../../css/c/ctmd9xbxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOjViQcyF"><g class="s9cl3zbei"><path clip-rule="evenodd" class="azokiuq7x"/><path class="q3jhrhbxa"/><path class="ctmd9xbxy"/></g></mask></defs><path mask="url(#SVGOjViQcyF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mask"} {...others} />);
}

export default Component;
