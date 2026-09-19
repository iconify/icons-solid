import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yb48dqbmb.css';
import '../../css/n/n9p73bndx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yb48dqbmb"/><rect class="n9p73bndx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:label"} {...others} />);
}

export default Component;
