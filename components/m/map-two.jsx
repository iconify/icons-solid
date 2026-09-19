import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lida862-d.css';
import '../../css/m/mktkafb5g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7rL5W2Zc"><g class="ufeehvblu"><path class="lida862-d"/><path class="mktkafb5g"/></g></mask></defs><path mask="url(#SVG7rL5W2Zc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:map-two"} {...others} />);
}

export default Component;
