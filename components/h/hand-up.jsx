import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/ka6c5cbmx.css';
import '../../css/p/puckv5bwn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgzUlicSd"><g class="v3_i3wktz"><path class="ka6c5cbmx"/><path clip-rule="evenodd" class="puckv5bwn"/></g></mask></defs><path mask="url(#SVGgzUlicSd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hand-up"} {...others} />);
}

export default Component;
