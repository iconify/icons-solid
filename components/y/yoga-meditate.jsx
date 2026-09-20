import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-_c3bbkr.css';
import '../../css/m/m0vdq-b3h.css';
import '../../css/p/pd-67fbhx.css';
import '../../css/g/gl52c-0ib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j-_c3bbkr"/><path class="m0vdq-b3h"/><path class="pd-67fbhx"/><path class="gl52c-0ib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:yoga-meditate"} {...others} />);
}

export default Component;
