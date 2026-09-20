import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bkl-h3cox.css';
import '../../css/p/pd-ituhrq.css';
import '../../css/d/d2nez888o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bkl-h3cox"/><path class="pd-ituhrq"/><path class="d2nez888o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-cog"} {...others} />);
}

export default Component;
