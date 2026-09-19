import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/l/llcnvrb_r.css';
import '../../css/l/lu23enbij.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbJmw9dVK"><g class="ylrso7y3c"><path class="llcnvrb_r"/><path class="lu23enbij"/></g></mask></defs><path mask="url(#SVGbJmw9dVK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:speaker"} {...others} />);
}

export default Component;
