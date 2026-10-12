import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve1apgbwp.css';
import '../../css/k/kskhodb0a.css';
import '../../css/x/x1mnnibkw.css';
import '../../css/z/zlkmtxb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ve1apgbwp"/><path class="kskhodb0a"/><path class="x1mnnibkw"/><path class="zlkmtxb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-coins-duotone"} {...others} />);
}

export default Component;
