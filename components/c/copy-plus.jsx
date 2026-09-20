import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cedf4-wkw.css';
import '../../css/y/y2r600b7v.css';
import '../../css/z/zlf7r1kic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cedf4-wkw"/><rect class="y2r600b7v"/><path class="zlf7r1kic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:copy-plus"} {...others} />);
}

export default Component;
