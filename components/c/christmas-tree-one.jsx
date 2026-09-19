import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b441fzbfo.css';
import '../../css/g/guk_s2bmj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b441fzbfo"/><path class="guk_s2bmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:christmas-tree-one"} {...others} />);
}

export default Component;
