import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/d5rlwhbfc.css';
import '../../css/u/uff8ilbxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgWHeveXs"><g class="aql7dnt-u"><path class="d5rlwhbfc"/><path class="uff8ilbxx"/></g></mask></defs><path mask="url(#SVGgWHeveXs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bedside"} {...others} />);
}

export default Component;
