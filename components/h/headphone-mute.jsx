import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9lrv0bxv.css';
import '../../css/p/p3y9-8bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9lrv0bxv"/><path class="p3y9-8bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:headphone-mute"} {...others} />);
}

export default Component;
