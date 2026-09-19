import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/y/yo05b4clt.css';
import '../../css/t/tj_b4ycac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="yo05b4clt"/><path class="tj_b4ycac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:torch"} {...others} />);
}

export default Component;
