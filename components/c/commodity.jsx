import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fe8ov1blm.css';
import '../../css/n/ny-0gfb3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8xZFKcWH"><g class="ufeehvblu"><path class="fe8ov1blm"/><path class="ny-0gfb3p"/></g></mask></defs><path mask="url(#SVG8xZFKcWH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:commodity"} {...others} />);
}

export default Component;
