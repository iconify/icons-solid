import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/ktokpccng.css';
import '../../css/r/rtdu8kbun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6EkOAb1c"><g class="ufeehvblu"><path class="ktokpccng"/><path class="rtdu8kbun"/></g></mask></defs><path mask="url(#SVG6EkOAb1c)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:watermelon"} {...others} />);
}

export default Component;
