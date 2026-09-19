import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s0-tqnbbs.css';
import '../../css/m/mwgx5ob5e.css';
import '../../css/i/ix53aib4b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="s0-tqnbbs"/><path class="mwgx5ob5e"/><path class="ix53aib4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-call"} {...others} />);
}

export default Component;
