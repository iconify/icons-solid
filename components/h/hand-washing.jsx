import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/djvowre1f.css';
import '../../css/i/isuxm5bho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="djvowre1f"/><path class="isuxm5bho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hand-washing"} {...others} />);
}

export default Component;
