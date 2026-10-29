import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fxpjof0ho.css';
import '../../css/k/koqkggbqh.css';
import '../../css/x/xlau4cdnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fxpjof0ho"/><path class="koqkggbqh wm-a"/><path class="xlau4cdnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tent-duo"} {...others} />);
}

export default Component;
