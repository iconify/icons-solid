import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/evcx3abrv.css';
import '../../css/e/e53olifge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWl3NShse"><g class="rohhhzb0l"><path class="evcx3abrv"/><path class="e53olifge"/></g></mask></defs><path mask="url(#SVGWl3NShse)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circular-connection"} {...others} />);
}

export default Component;
