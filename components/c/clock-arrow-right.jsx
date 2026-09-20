import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ucs7_ohzj.css';
import '../../css/o/oa_igybyi.css';
import '../../css/n/nzlt59bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ucs7_ohzj"/><path class="oa_igybyi"/><path class="nzlt59bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-right"} {...others} />);
}

export default Component;
