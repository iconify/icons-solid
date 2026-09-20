import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0n3663da.css';
import '../../css/p/p6wo5wb9i.css';
import '../../css/x/x-fu-hsfb.css';
import '../../css/s/s85xhebpa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p0n3663da"/><path class="p6wo5wb9i"/><path class="x-fu-hsfb"/><path class="s85xhebpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hierarchy-16"} {...others} />);
}

export default Component;
