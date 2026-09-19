import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wqc8scbug.css';
import '../../css/s/sy2au8wtm.css';
import '../../css/q/qowkpdb6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmU1dhVZp"><g class="rohhhzb0l"><path class="wqc8scbug"/><path class="sy2au8wtm"/><path class="qowkpdb6h"/></g></mask></defs><path mask="url(#SVGmU1dhVZp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cake-four"} {...others} />);
}

export default Component;
