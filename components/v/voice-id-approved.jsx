import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yhfey4bak.css';
import '../../css/h/hihu1db0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yhfey4bak"/><path class="hihu1db0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:voice-id-approved"} {...others} />);
}

export default Component;
