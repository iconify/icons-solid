import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rb6t6wb7d.css';
import '../../css/h/hkw5s0b0y.css';
import '../../css/t/tb7h92xrz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgREXvdsR"><g class="rohhhzb0l"><path class="rb6t6wb7d"/><path class="hkw5s0b0y"/><path class="tb7h92xrz"/></g></mask></defs><path mask="url(#SVGgREXvdsR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:school"} {...others} />);
}

export default Component;
