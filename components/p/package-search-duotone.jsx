import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enmgbzdoq.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/v/v0ov3-z4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="enmgbzdoq"/><path class="l7ocqgb5a"/><path class="v0ov3-z4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-search-duotone"} {...others} />);
}

export default Component;
