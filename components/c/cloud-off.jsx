import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9n-rccba.css';
import '../../css/j/jbvxl-b2r.css';
import '../../css/n/n5s-_wqwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9n-rccba"/><path class="jbvxl-b2r"/><path class="n5s-_wqwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-off"} {...others} />);
}

export default Component;
