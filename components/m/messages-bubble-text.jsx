import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9oelhb9q.css';
import '../../css/r/r-9u_n0wc.css';
import '../../css/e/esw8z1ykx.css';
import '../../css/p/pkreo9wty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9oelhb9q"/><path class="r-9u_n0wc"/><path class="esw8z1ykx"/><path class="pkreo9wty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-bubble-text"} {...others} />);
}

export default Component;
