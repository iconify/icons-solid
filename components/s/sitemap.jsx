import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xv6ljh3wt.css';
import '../../css/c/cmgq-2o2d.css';
import '../../css/m/m_ax2cb4m.css';
import '../../css/v/v4aw2fbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xv6ljh3wt"/><rect class="cmgq-2o2d"/><rect class="m_ax2cb4m"/><rect class="v4aw2fbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sitemap"} {...others} />);
}

export default Component;
