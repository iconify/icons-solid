import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/suuz8d7iq.css';
import '../../css/b/bauxs7clz.css';
import '../../css/o/oogehbcah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="suuz8d7iq"/><path class="bauxs7clz"/><path class="oogehbcah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pin-alt-duotone-line"} {...others} />);
}

export default Component;
