import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fyv63n06x.css';
import '../../css/g/ge2z8-slh.css';
import '../../css/l/l8-q0ccsa.css';
import '../../css/k/k-3466b-a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdIn5hdef"><g class="aql7dnt-u"><path class="fyv63n06x"/><path class="ge2z8-slh"/><path class="l8-q0ccsa"/><path class="k-3466b-a"/></g></mask></defs><path mask="url(#SVGdIn5hdef)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:map-road-two"} {...others} />);
}

export default Component;
