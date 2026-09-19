import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/e/eo3-_3b1e.css';
import '../../css/f/f6z86b9cg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGM9RU2R1h"><g class="ufeehvblu"><path class="eo3-_3b1e"/><path class="f6z86b9cg"/></g></mask></defs><path mask="url(#SVGM9RU2R1h)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:map-road"} {...others} />);
}

export default Component;
