import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ud3z8sbrx.css';
import '../../css/i/i3ibt-pfg.css';
import '../../css/j/j8m16sb0y.css';
import '../../css/w/wwmmck7wx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ud3z8sbrx"/><path class="i3ibt-pfg"/><path class="j8m16sb0y"/><path class="wwmmck7wx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tripadvisor-logo"} {...others} />);
}

export default Component;
