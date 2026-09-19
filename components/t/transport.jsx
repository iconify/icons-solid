import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m9feig07x.css';
import '../../css/b/brqvdqb4k.css';
import '../../css/o/oi399bbnr.css';
import '../../css/j/jma-m330n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPE7onbRF"><g class="rohhhzb0l"><rect class="m9feig07x"/><path class="brqvdqb4k"/><path class="oi399bbnr"/><path class="jma-m330n"/></g></mask></defs><path mask="url(#SVGPE7onbRF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transport"} {...others} />);
}

export default Component;
