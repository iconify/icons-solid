import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/e/ewto5oebz.css';
import '../../css/g/g7smnwyub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="ewto5oebz"/><path class="g7smnwyub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sparkle-scan"} {...others} />);
}

export default Component;
