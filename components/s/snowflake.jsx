import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/isztaoy2o.css';
import '../../css/b/ba2e80hku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="isztaoy2o"/><path class="ba2e80hku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:snowflake"} {...others} />);
}

export default Component;
