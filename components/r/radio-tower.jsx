import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjxhvebwx.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/q/q23j4vbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jjxhvebwx"/><circle class="rs-d_y_0o"/><path class="q23j4vbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:radio-tower"} {...others} />);
}

export default Component;
