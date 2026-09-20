import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_mawq86p.css';
import '../../css/j/j4yj9ly8b.css';
import '../../css/u/u03tgvbmi.css';
import '../../css/d/dmpvkt-we.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_mawq86p"/><path class="j4yj9ly8b"/><path class="u03tgvbmi"/><path clip-rule="evenodd" class="dmpvkt-we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:superseed"} {...others} />);
}

export default Component;
