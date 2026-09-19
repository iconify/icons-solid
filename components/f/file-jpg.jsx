import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/n/n30r1sbok.css';
import '../../css/j/j5nytdpoh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkenedgrD"><g class="rohhhzb0l"><path class="if55a7bnz"/><path class="n30r1sbok"/><path class="j5nytdpoh"/></g></mask></defs><path mask="url(#SVGkenedgrD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-jpg"} {...others} />);
}

export default Component;
