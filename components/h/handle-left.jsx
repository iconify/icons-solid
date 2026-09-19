import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/e/etzb_tbee.css';
import '../../css/y/y6ceh3urm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTa2KLeHE"><g class="ylrso7y3c"><rect class="etzb_tbee"/><path class="y6ceh3urm"/></g></mask></defs><path mask="url(#SVGTa2KLeHE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handle-left"} {...others} />);
}

export default Component;
