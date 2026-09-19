import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/phcpqebqo.css';
import '../../css/u/uf96tybxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="phcpqebqo"/><path class="uf96tybxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-spark-01"} {...others} />);
}

export default Component;
