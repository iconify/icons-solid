import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uj13tpd7t.css';
import '../../css/b/b0tiyac0z.css';
import '../../css/w/wscxsjfkl.css';
import '../../css/w/wy6wkbbrz.css';
import '../../css/r/rq_kn7bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="uj13tpd7t"/><path class="b0tiyac0z"/><path class="wscxsjfkl"/><path class="wy6wkbbrz"/><path class="rq_kn7bnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:icq-logo-1"} {...others} />);
}

export default Component;
