import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2yxf5e2e.css';
import '../../css/j/jc_-971dx.css';
import '../../css/y/yhw9-4bme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.22 12.08)" class="e2yxf5e2e"/><path class="jc_-971dx"/><path class="yhw9-4bme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-360-left"} {...others} />);
}

export default Component;
