import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gtklzcyuo.css';
import '../../css/n/nz26t1bjz.css';
import '../../css/e/e4mo_8b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gtklzcyuo"/><rect class="nz26t1bjz"/><path class="e4mo_8b_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gallery-vertical"} {...others} />);
}

export default Component;
