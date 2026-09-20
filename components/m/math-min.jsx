import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rm207b_9m.css';
import '../../css/g/gxw-hdbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rm207b_9m"/><path class="gxw-hdbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:math-min"} {...others} />);
}

export default Component;
