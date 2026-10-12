import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4d_cbcla.css';
import '../../css/s/smcd-7qqt.css';
import '../../css/b/bqq9k-tbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u4d_cbcla"/><path class="smcd-7qqt"/><path class="bqq9k-tbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:coffee-duotone"} {...others} />);
}

export default Component;
