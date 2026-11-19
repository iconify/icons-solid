import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-tpqjtqa.css';
import '../../css/m/m4t5wlb6j.css';
import '../../css/k/ko27go6yv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-tpqjtqa"/><circle class="m4t5wlb6j"/><path class="ko27go6yv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-fog"} {...others} />);
}

export default Component;
