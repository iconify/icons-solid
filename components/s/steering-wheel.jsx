import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6wtazbdd.css';
import '../../css/o/ojb0krbzv.css';
import '../../css/p/p4pn9mm9j.css';
import '../../css/k/kaw_sn90i.css';
import '../../css/j/jfmp5rbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w6wtazbdd"/><path clip-rule="evenodd" class="ojb0krbzv"/><path class="p4pn9mm9j"/><path class="kaw_sn90i"/><path class="jfmp5rbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:steering-wheel"} {...others} />);
}

export default Component;
