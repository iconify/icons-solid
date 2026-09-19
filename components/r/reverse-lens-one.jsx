import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tmngr6b0v.css';
import '../../css/j/jn2jlqbfe.css';
import '../../css/n/n0rx2i3tg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="tmngr6b0v"/><path class="jn2jlqbfe"/><path class="n0rx2i3tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:reverse-lens-one"} {...others} />);
}

export default Component;
