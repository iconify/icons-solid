import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eemzimb8c.css';
import '../../css/d/d78h26l-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eemzimb8c"/><path class="d78h26l-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:link-filled"} {...others} />);
}

export default Component;
