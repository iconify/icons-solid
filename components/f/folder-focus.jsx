import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/o/oqrlyv_mz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxJyo8bej"><g class="ylrso7y3c"><path class="sz6vb1uxi"/><path class="oqrlyv_mz"/></g></mask></defs><path mask="url(#SVGxJyo8bej)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-focus"} {...others} />);
}

export default Component;
