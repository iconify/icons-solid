import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a9bv5977p.css';
import '../../css/o/o4whri-id.css';
import '../../css/e/ezom_3bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a9bv5977p"/><path class="o4whri-id"/><path class="ezom_3bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:book-marked"} {...others} />);
}

export default Component;
