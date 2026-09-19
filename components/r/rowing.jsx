import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/y/yplbaw3db.css';
import '../../css/j/jkcu7kbhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiGiSwbSe"><g class="cgga7abld"><path class="yplbaw3db"/><path class="jkcu7kbhq"/></g></mask></defs><path mask="url(#SVGiGiSwbSe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rowing"} {...others} />);
}

export default Component;
