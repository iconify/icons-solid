import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhyxv3b0h.css';
import '../../css/e/eik-sezpc.css';
import '../../css/r/r3rm-cb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yhyxv3b0h"/><path class="eik-sezpc"/><path class="r3rm-cb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lasso-duotone"} {...others} />);
}

export default Component;
