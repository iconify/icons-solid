import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y8nw6jm7n.css';
import '../../css/k/k_y44mokq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNOlubAzD"><g class="rohhhzb0l"><rect class="y8nw6jm7n"/><path class="k_y44mokq"/></g></mask></defs><path mask="url(#SVGNOlubAzD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:laptop-computer"} {...others} />);
}

export default Component;
