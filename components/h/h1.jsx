import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5ygchbhs.css';
import '../../css/b/bxzphvblp.css';
import '../../css/j/js2d54b3t.css';
import '../../css/g/gej8q_bqp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m5ygchbhs"/><path class="bxzphvblp"/><path class="js2d54b3t"/><path class="gej8q_bqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:h1"} {...others} />);
}

export default Component;
