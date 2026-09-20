import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/li1o8oboq.css';
import '../../css/v/vo56_7bsj.css';
import '../../css/o/owf6whbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="li1o8oboq"/><path class="vo56_7bsj"/><path class="owf6whbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:pdf-2"} {...others} />);
}

export default Component;
