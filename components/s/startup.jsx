import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g8td8zq9j.css';
import '../../css/b/b57t4ujhz.css';
import '../../css/e/e2v-77bvv.css';
import '../../css/y/yp2jt6bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g8td8zq9j"/><path class="b57t4ujhz"/><path class="e2v-77bvv"/><path class="yp2jt6bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:startup"} {...others} />);
}

export default Component;
