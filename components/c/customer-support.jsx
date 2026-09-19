import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/obblj4bwn.css';
import '../../css/d/d-9yqyjnd.css';
import '../../css/o/ogj5jkb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="obblj4bwn"/><path class="d-9yqyjnd"/><path class="ogj5jkb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customer-support"} {...others} />);
}

export default Component;
