import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/y/y04qg5bxg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYjSiaecR"><g class="ylrso7y3c"><path class="sz6vb1uxi"/><path class="y04qg5bxg"/></g></mask></defs><path mask="url(#SVGYjSiaecR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-quality"} {...others} />);
}

export default Component;
