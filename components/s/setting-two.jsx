import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/d/dnob__wjw.css';
import '../../css/g/g0sf6ebkt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjtLwKbIn"><g class="ylrso7y3c"><path class="dnob__wjw"/><path class="g0sf6ebkt"/></g></mask></defs><path mask="url(#SVGjtLwKbIn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:setting-two"} {...others} />);
}

export default Component;
