import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpxbn7r9f.css';
import '../../css/s/sx1x2ugoh.css';
import '../../css/z/zwb0ztbpv.css';
import '../../css/c/cfda53goq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wpxbn7r9f"/><path class="sx1x2ugoh"/><path class="zwb0ztbpv"/><path class="cfda53goq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shorts"} {...others} />);
}

export default Component;
