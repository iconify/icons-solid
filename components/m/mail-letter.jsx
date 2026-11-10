import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sf3umw9pc.css';
import '../../css/j/j5qj9accq.css';
import '../../css/w/wrugu_ffb.css';
import '../../css/l/lgalliejm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sf3umw9pc"/><path class="j5qj9accq"/><path class="wrugu_ffb"/><path class="lgalliejm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-letter"} {...others} />);
}

export default Component;
