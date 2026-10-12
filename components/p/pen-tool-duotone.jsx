import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqm0zqpjw.css';
import '../../css/r/rzso0ac9x.css';
import '../../css/f/fj-sjk2rc.css';
import '../../css/i/ixk_98bub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qqm0zqpjw"/><path class="rzso0ac9x"/><path class="fj-sjk2rc"/><path class="ixk_98bub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pen-tool-duotone"} {...others} />);
}

export default Component;
