import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tnsdjoz2v.css';
import '../../css/y/y1yeo1vat.css';
import '../../css/a/a2qsicn0m.css';
import '../../css/p/pw12eebpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tnsdjoz2v wm-deco"/><path class="wm-deco y1yeo1vat"/><path class="a2qsicn0m"/><path class="pw12eebpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-right-blueprint"} {...others} />);
}

export default Component;
