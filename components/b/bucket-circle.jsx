import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nw21fqb1s.css';
import '../../css/r/r9hyg7b7k.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nw21fqb1s"/><path class="r9hyg7b7k"/><path class="p9-zrkb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bucket-circle"} {...others} />);
}

export default Component;
