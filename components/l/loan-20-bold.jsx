import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6hxv1kmr.css';
import '../../css/m/mmasx843w.css';
import '../../css/d/d1xy-t7vc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u6hxv1kmr"/><path class="mmasx843w"/><path class="d1xy-t7vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loan-20-bold"} {...others} />);
}

export default Component;
