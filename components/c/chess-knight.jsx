import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kup6yv64e.css';
import '../../css/v/v6kzd0nbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kup6yv64e"/><path class="v6kzd0nbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chess-knight"} {...others} />);
}

export default Component;
