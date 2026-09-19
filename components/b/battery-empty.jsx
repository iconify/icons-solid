import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk3045bun.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxzvDJH5C"><g class="ft5dv1b6b"><path class="pk3045bun"/><path class="q0fujjtaq"/></g></mask></defs><path mask="url(#SVGxzvDJH5C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:battery-empty"} {...others} />);
}

export default Component;
