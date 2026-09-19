import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pqdzjzbll.css';
import '../../css/q/qw1o1sbjo.css';
import '../../css/n/nmm172boh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pqdzjzbll"/><path class="qw1o1sbjo"/><path class="nmm172boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connection-arrow"} {...others} />);
}

export default Component;
