import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p6h4xl3fg.css';
import '../../css/w/wtmily5br.css';
import '../../css/n/n6rbqf0vy.css';
import '../../css/b/bfthykebc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p6h4xl3fg"/><path class="wtmily5br"/><path class="n6rbqf0vy"/><path class="bfthykebc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-broken"} {...others} />);
}

export default Component;
