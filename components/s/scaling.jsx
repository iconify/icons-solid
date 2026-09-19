import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmxlmc_fk.css';
import '../../css/m/mo5jszbox.css';
import '../../css/p/p2gcfns7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tmxlmc_fk"/><path class="mo5jszbox"/><path class="p2gcfns7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scaling"} {...others} />);
}

export default Component;
