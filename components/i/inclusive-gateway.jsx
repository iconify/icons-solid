import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/s7vus8b6x.css';
import '../../css/x/x1tpzjbth.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGb4KwUAdO"><g class="ylrso7y3c"><path class="s7vus8b6x"/><path class="x1tpzjbth"/></g></mask></defs><path mask="url(#SVGb4KwUAdO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:inclusive-gateway"} {...others} />);
}

export default Component;
