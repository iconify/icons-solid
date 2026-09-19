import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msv6_bc6s.css';
import '../../css/h/hd1thrbaq.css';
import '../../css/s/spoflublb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHQaQblpc"><g class="s9cl3zbei"><path class="msv6_bc6s"/><circle class="hd1thrbaq"/><path class="spoflublb"/></g></mask></defs><path mask="url(#SVGHQaQblpc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-search"} {...others} />);
}

export default Component;
