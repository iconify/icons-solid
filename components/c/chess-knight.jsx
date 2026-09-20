import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bsfg6lbji.css';
import '../../css/a/au9rkbbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bsfg6lbji"/><path class="au9rkbbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chess-knight"} {...others} />);
}

export default Component;
