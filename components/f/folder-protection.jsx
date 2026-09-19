import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/r/rl8ffo9dv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGg5PKXbTW"><g class="ylrso7y3c"><path class="sz6vb1uxi"/><path class="rl8ffo9dv"/></g></mask></defs><path mask="url(#SVGg5PKXbTW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-protection"} {...others} />);
}

export default Component;
