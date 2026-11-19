import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y5mdbok.css';
import '../../css/z/z0m2wbbuy.css';
import '../../css/b/bhp-7fbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k6y5mdbok"/><path class="z0m2wbbuy"/><path class="bhp-7fbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:store-off"} {...others} />);
}

export default Component;
