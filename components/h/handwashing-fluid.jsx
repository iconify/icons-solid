import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fb4hq5b3x.css';
import '../../css/i/ir_5pab5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgtHFNceD"><g class="rohhhzb0l"><path class="fb4hq5b3x"/><path class="ir_5pab5v"/></g></mask></defs><path mask="url(#SVGgtHFNceD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handwashing-fluid"} {...others} />);
}

export default Component;
