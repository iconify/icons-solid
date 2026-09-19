import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u_eifnz9i.css';
import '../../css/w/wnnlb85tz.css';
import '../../css/b/basw9ubgc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlEgqjbmr"><g class="rohhhzb0l"><path class="u_eifnz9i"/><path class="wnnlb85tz"/><path class="basw9ubgc"/></g></mask></defs><path mask="url(#SVGlEgqjbmr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iwatch"} {...others} />);
}

export default Component;
