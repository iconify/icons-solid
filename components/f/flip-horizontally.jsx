import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jllyhjbpq.css';
import '../../css/v/vnov31bpx.css';
import '../../css/y/yst-xparl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="jllyhjbpq"/><path class="vnov31bpx"/><path class="yst-xparl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flip-horizontally"} {...others} />);
}

export default Component;
