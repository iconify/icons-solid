import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpkp6q-rg.css';
import '../../css/f/foe0t-bls.css';
import '../../css/d/dllpr8t9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xpkp6q-rg"/><circle transform="rotate(-180 11 11)" class="foe0t-bls"/><path class="dllpr8t9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pen"} {...others} />);
}

export default Component;
