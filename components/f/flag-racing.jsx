import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi-5r-bmr.css';
import '../../css/i/i8ba38uct.css';
import '../../css/k/kckmgybcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mi-5r-bmr"/><path class="i8ba38uct"/><path class="kckmgybcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flag-racing"} {...others} />);
}

export default Component;
