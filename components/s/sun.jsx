import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i92azyepm.css';
import '../../css/l/le-21_9cz.css';
import '../../css/t/t53x35v6o.css';
import '../../css/l/lzd7xpbas.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i92azyepm"/><path class="le-21_9cz"/><path class="t53x35v6o"/><path class="lzd7xpbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:sun"} {...others} />);
}

export default Component;
