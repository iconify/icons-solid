import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jf4xiob2j.css';
import '../../css/n/n-8901blk.css';
import '../../css/i/in_9y-pym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtdXAid2e"><g class="aql7dnt-u"><path class="jf4xiob2j"/><rect class="n-8901blk"/><path class="in_9y-pym"/></g></mask></defs><path mask="url(#SVGtdXAid2e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:beauty-instrument"} {...others} />);
}

export default Component;
