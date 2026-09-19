import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bd8ephb8q.css';
import '../../css/g/gwpoo533p.css';
import '../../css/u/u65--k4ig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGks21oeDl"><g class="ufeehvblu"><path class="bd8ephb8q"/><path class="gwpoo533p"/><path class="u65--k4ig"/></g></mask></defs><path mask="url(#SVGks21oeDl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:beer-mug"} {...others} />);
}

export default Component;
