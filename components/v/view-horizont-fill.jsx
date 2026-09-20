import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7v2-ye3h.css';
import '../../css/r/rfrpfefci.css';
import '../../css/e/eg4pfcc0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7v2-ye3h"/><path class="rfrpfefci"/><path clip-rule="evenodd" class="eg4pfcc0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-horizont-fill"} {...others} />);
}

export default Component;
