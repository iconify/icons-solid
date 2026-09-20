import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t6mow_csc.css';
import '../../css/a/an84x5z4z.css';
import '../../css/e/e46ou9nch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t6mow_csc"/><path class="an84x5z4z"/><path class="e46ou9nch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:electronics-led-light"} {...others} />);
}

export default Component;
