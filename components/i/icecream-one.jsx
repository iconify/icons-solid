import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h1rcu1b2b.css';
import '../../css/e/echpw1dsw.css';
import '../../css/g/guq_lwl5e.css';
import '../../css/f/f5rmglb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="h1rcu1b2b"/><path class="echpw1dsw"/><path class="guq_lwl5e"/><path class="f5rmglb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream-one"} {...others} />);
}

export default Component;
