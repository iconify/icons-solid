import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wqeor8b3g.css';
import '../../css/o/o7xo0fbbb.css';
import '../../css/l/ll86lgblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wqeor8b3g"/><circle class="o7xo0fbbb"/><path class="ll86lgblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-plus"} {...others} />);
}

export default Component;
