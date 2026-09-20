import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xpue3xblo.css';
import '../../css/q/qv3c50bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xpue3xblo"/><path class="qv3c50bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:shop"} {...others} />);
}

export default Component;
