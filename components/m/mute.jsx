import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/n/nxfle3bpy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVqHvtbBk"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="nxfle3bpy"/></g></mask></defs><path mask="url(#SVGVqHvtbBk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mute"} {...others} />);
}

export default Component;
