import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rne8-kbom.css';
import '../../css/z/zhnptnbwx.css';
import '../../css/g/gp9p8lb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rne8-kbom"/><path class="zhnptnbwx"/><path class="gp9p8lb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:faucet-duotone"} {...others} />);
}

export default Component;
