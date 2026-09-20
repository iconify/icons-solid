import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2kuy8bdw.css';
import '../../css/i/ilo73sv2v.css';
import '../../css/z/zc__ylwvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i2kuy8bdw"/><rect class="ilo73sv2v"/><path class="zc__ylwvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:luggage-cabin"} {...others} />);
}

export default Component;
