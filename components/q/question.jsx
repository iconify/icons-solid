import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihd2q809h.css';
import '../../css/o/olg0x-m0f.css';
import '../../css/s/sovlp1b4o.css';
import '../../css/f/fv0al6bdl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ihd2q809h"/><path clip-rule="evenodd" class="olg0x-m0f"/><path clip-rule="evenodd" class="sovlp1b4o"/><path clip-rule="evenodd" class="fv0al6bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:question"} {...others} />);
}

export default Component;
