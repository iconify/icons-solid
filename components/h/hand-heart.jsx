import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l7zb1yb5i.css';
import '../../css/p/p4ftfsbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l7zb1yb5i"/><path class="p4ftfsbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-heart"} {...others} />);
}

export default Component;
