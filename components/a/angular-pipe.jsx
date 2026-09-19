import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf4u1os6q.css';
import '../../css/f/f-8rhabij.css';
import '../../css/e/edskbpa8c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tf4u1os6q"><path class="f-8rhabij"/><path class="edskbpa8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:angular-pipe"} {...others} />);
}

export default Component;
