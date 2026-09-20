import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ucs7_ohzj.css';
import '../../css/b/bjbh1koxw.css';
import '../../css/l/lfhzl7dxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ucs7_ohzj"/><path class="bjbh1koxw"/><path class="lfhzl7dxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-down"} {...others} />);
}

export default Component;
