import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k60pif1jd.css';
import '../../css/j/jlxcs36um.css';
import '../../css/x/x2rlj0bzp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k60pif1jd"/><path class="jlxcs36um"/><path class="x2rlj0bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:megaphone-1"} {...others} />);
}

export default Component;
