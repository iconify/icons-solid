import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9u5bx9ll.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/c/ch12h9bms.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCCgtcd5Q"><g class="ft5dv1b6b"><rect class="k9u5bx9ll"/><path class="q0fujjtaq"/><path class="ch12h9bms"/></g></mask></defs><path mask="url(#SVGCCgtcd5Q)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:battery-working-one"} {...others} />);
}

export default Component;
