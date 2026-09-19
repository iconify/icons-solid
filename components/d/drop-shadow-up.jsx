import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/u/ulte-guim.css';
import '../../css/k/kwzrzeqtd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhGQmxeQo"><g class="hv130ab-t"><path clip-rule="evenodd" class="ulte-guim"/><path class="kwzrzeqtd"/></g></mask></defs><path mask="url(#SVGhGQmxeQo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:drop-shadow-up"} {...others} />);
}

export default Component;
