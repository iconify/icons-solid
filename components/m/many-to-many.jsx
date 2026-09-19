import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/l/ll6bpkbte.css';
import '../../css/v/vmbylbb-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUG4GPdtL"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="ll6bpkbte"/><path class="vmbylbb-t"/></g></mask></defs><path mask="url(#SVGUG4GPdtL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:many-to-many"} {...others} />);
}

export default Component;
