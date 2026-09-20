import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b91ogbb3q.css';
import '../../css/g/g7lvh9b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="b91ogbb3q"/><path class="g7lvh9b1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:forward-email"} {...others} />);
}

export default Component;
