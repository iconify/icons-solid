import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/k/k6gunabei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="k6gunabei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flash-circle2"} {...others} />);
}

export default Component;
