import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4qjd0i0q.css';
import '../../css/k/k-wamd0up.css';
import '../../css/a/aqe2mqn0h.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4qjd0i0q"/><path class="k-wamd0up"/><path class="aqe2mqn0h"/><path class="khdkximwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-eth-circle"} {...others} />);
}

export default Component;
