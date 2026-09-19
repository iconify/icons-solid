import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cd4jh9b2i.css';
import '../../css/u/u87s-dbol.css';
import '../../css/q/q0t9mv_dq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cd4jh9b2i"/><path class="u87s-dbol"/><path class="q0t9mv_dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bachelor-cap-one"} {...others} />);
}

export default Component;
